import { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { SpotifyTrack } from "@/types/spotify";
import SpotifyTrackDisplay from "./spotify/SpotifyTrackDisplay";
import ListeningStatus from "./spotify/ListeningStatus";
import ContactInfo from "./contact/ContactInfo";

const Footer = () => {
  const [currentTrack, setCurrentTrack] = useState<SpotifyTrack | null>(null);

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('spotify', {
          method: 'GET'
        });
        
        if (error) {
          console.error('Error fetching current track:', error);
          return;
        }
        
        setCurrentTrack(data);
      } catch (err) {
        console.error('Error in Spotify fetch:', err);
      }
    };

    fetchCurrentTrack();
    const interval = setInterval(fetchCurrentTrack, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative -mx-6 md:-mx-[220px] px-6 md:px-[220px] pt-12 border-t border-[#e5e5e5] border-opacity-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        <div className="relative">
          <ListeningStatus 
            isPlaying={currentTrack?.is_playing ?? false}
            hasTrack={!!currentTrack?.item}
          />
          <div className="space-y-1">
            <SpotifyTrackDisplay 
              track={currentTrack?.item}
              isPlaying={currentTrack?.is_playing ?? false}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <ContactInfo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;