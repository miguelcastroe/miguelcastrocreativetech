import { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";

interface SpotifyTrack {
  item?: {
    name: string;
    artists: Array<{ name: string }>;
    external_urls: { spotify: string };
  };
  is_playing: boolean;
}

const Footer = () => {
  const [currentTrack, setCurrentTrack] = useState<SpotifyTrack | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('spotify');
        
        if (error) throw error;
        setCurrentTrack(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching current track:', err);
        setError('Failed to fetch current track');
      }
    };

    fetchCurrentTrack();
    const interval = setInterval(fetchCurrentTrack, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative mt-26 -mx-6 md:-mx-[220px] px-6 md:px-[220px] pt-26">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-tiny">
        <div className="relative">
          <h3 className="uppercase mb-2 text-[#a1a1aa] flex items-center gap-2">
            Listening Live
            <span className={`w-2 h-2 rounded-full ${currentTrack?.is_playing ? 'bg-green-500 animate-[pulse_2s_ease-in-out_infinite]' : 'bg-gray-400'}`}></span>
          </h3>
          <div className="space-y-1">
            {currentTrack?.item ? (
              <a 
                href={currentTrack.item.external_urls.spotify} 
                className="block"
                target="_blank" 
                rel="noopener noreferrer"
              >
                {currentTrack.item.name} - {currentTrack.item.artists[0].name}
              </a>
            ) : (
              <span className="text-gray-500">Not playing</span>
            )}
          </div>
        </div>
        <div>
          <h3 className="uppercase mb-2 text-[#a1a1aa]">Social</h3>
          <div className="space-y-1">
            <a href="https://linkedin.com/in/miguelcastro" className="block">linkedin.com/in/miguelcastro</a>
            <a href="mailto:m@miguelcastro" className="block">m@miguelcastro</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;