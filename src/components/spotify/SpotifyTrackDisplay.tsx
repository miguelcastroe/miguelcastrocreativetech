import { SpotifyTrack } from "@/types/spotify";

interface SpotifyTrackDisplayProps {
  track: SpotifyTrack["item"];
  isPlaying: boolean;
}

const SpotifyTrackDisplay = ({ track, isPlaying }: SpotifyTrackDisplayProps) => {
  if (!track) return <span className="text-[#a1a1aa]">Not playing</span>;

  return (
    <div className="flex items-start gap-3">
      {track.album?.images?.[2]?.url && (
        <img 
          src={track.album.images[2].url} 
          alt={`${track.name} album art`}
          className="w-10 h-10 rounded"
        />
      )}
      <div className="flex flex-col">
        <a 
          href={track.external_urls.spotify} 
          className="block hover:text-[#ff4f00]"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {track.name} - {track.artists[0].name}
        </a>
        {!isPlaying && (
          <span className="text-[#a1a1aa]">Last played</span>
        )}
      </div>
    </div>
  );
};

export default SpotifyTrackDisplay;