import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const spotifyClientId = Deno.env.get('SPOTIFY_CLIENT_ID')!;
const spotifyClientSecret = Deno.env.get('SPOTIFY_CLIENT_SECRET')!;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

async function getSpotifyToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(`${spotifyClientId}:${spotifyClientSecret}`)}`,
    },
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to get Spotify token: ${response.status}`);
  }

  return response.json();
}

async function getCurrentlyPlaying(accessToken: string) {
  const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (response.status === 204) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to get currently playing: ${response.status}`);
  }

  return response.json();
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Getting Spotify token...');
    const tokenData = await getSpotifyToken();
    
    console.log('Getting currently playing track...');
    const currentTrack = await getCurrentlyPlaying(tokenData.access_token);
    
    return new Response(JSON.stringify(currentTrack), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in Spotify function:', error);
    return new Response(
      JSON.stringify({ error: error.message }), 
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});