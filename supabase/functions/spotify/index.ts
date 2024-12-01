import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const spotifyClientId = Deno.env.get('SPOTIFY_CLIENT_ID')!
const spotifyClientSecret = Deno.env.get('SPOTIFY_CLIENT_SECRET')!

const supabase = createClient(supabaseUrl, supabaseKey)

async function refreshSpotifyToken(refresh_token: string) {
  const params = new URLSearchParams()
  params.append('grant_type', 'refresh_token')
  params.append('refresh_token', refresh_token)

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(`${spotifyClientId}:${spotifyClientSecret}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  })

  if (!response.ok) {
    throw new Error('Failed to refresh token')
  }

  const data = await response.json()
  return data
}

async function getCurrentlyPlaying(access_token: string) {
  const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      'Authorization': `Bearer ${access_token}`,
    },
  })

  if (response.status === 204) {
    return null
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch currently playing: ${response.status}`)
  }

  return response.json()
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Get the most recent token
    const { data: tokens, error: tokenError } = await supabase
      .from('spotify_tokens')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    if (tokenError || !tokens) {
      throw new Error('No tokens found')
    }

    let access_token = tokens.access_token
    const expires_at = new Date(tokens.expires_at)
    const now = new Date()

    // If token is expired or will expire in the next minute, refresh it
    if (expires_at <= new Date(now.getTime() + 60 * 1000)) {
      console.log('Token expired or expiring soon, refreshing...')
      const refreshedTokens = await refreshSpotifyToken(tokens.refresh_token)
      
      // Calculate new expiration time (subtract 5 minutes for safety margin)
      const newExpiresAt = new Date(now.getTime() + (refreshedTokens.expires_in - 300) * 1000)
      
      // Update tokens in database
      const { error: updateError } = await supabase
        .from('spotify_tokens')
        .insert({
          access_token: refreshedTokens.access_token,
          refresh_token: refreshedTokens.refresh_token || tokens.refresh_token,
          expires_at: newExpiresAt.toISOString(),
        })

      if (updateError) {
        throw new Error('Failed to update tokens')
      }

      access_token = refreshedTokens.access_token
    }

    const currentlyPlaying = await getCurrentlyPlaying(access_token)
    
    return new Response(JSON.stringify(currentlyPlaying), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})