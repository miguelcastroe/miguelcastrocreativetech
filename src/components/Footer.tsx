import { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";

interface SpotifyTrack {
  item?: {
    name: string;
    artists: Array<{ name: string }>;
    external_urls: { spotify: string };
    album?: {
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
    };
  };
  is_playing: boolean;
}

const Footer = () => {
  const [currentTrack, setCurrentTrack] = useState<SpotifyTrack | null>(null);

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('spotify', {
          method: 'GET'
        });
        
        if (error) throw error;
        
        if (data && (!currentTrack || data.is_playing || !currentTrack.item)) {
          setCurrentTrack(data);
        }
      } catch (err) {
        console.error('Error fetching current track:', err);
      }
    };

    fetchCurrentTrack();
    const interval = setInterval(fetchCurrentTrack, 30000);

    return () => clearInterval(interval);
  }, [currentTrack]);

  return (
    <footer className="relative mt-26 -mx-6 md:-mx-[220px] px-6 md:px-[220px] pt-18 border-t border-[#e5e5e5] border-opacity-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-tiny">
        <div className="relative">
          <h3 className="uppercase mb-2 text-[#a1a1aa] flex items-center gap-2">
            Listening Live
            <span className={`w-2 h-2 rounded-full ${currentTrack?.is_playing ? 'bg-green-500 animate-[pulse_2s_ease-in-out_infinite]' : 'bg-gray-400'}`}></span>
          </h3>
          <div className="space-y-1">
            {currentTrack?.item ? (
              <div className="flex items-start gap-3">
                {currentTrack.item.album?.images?.[2]?.url && (
                  <img 
                    src={currentTrack.item.album.images[2].url} 
                    alt={`${currentTrack.item.name} album art`}
                    className="w-10 h-10 rounded"
                  />
                )}
                <div className="flex flex-col">
                  <a 
                    href={currentTrack.item.external_urls.spotify} 
                    className="block"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {currentTrack.item.name} - {currentTrack.item.artists[0].name}
                  </a>
                  {!currentTrack.is_playing && (
                    <span className="text-gray-500">Last played</span>
                  )}
                </div>
              </div>
            ) : (
              <span className="text-gray-500">Not playing</span>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <div className="text-left">
            <h3 className="uppercase mb-2 text-[#a1a1aa]">Contact</h3>
            <a href="mailto:miguel@miguelcastro.cc" className="block">miguel@miguelcastro.cc</a>
            <a href="tel:+51936646047" className="block">+51 936646047</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;