interface ListeningStatusProps {
  isPlaying: boolean;
  hasTrack: boolean;
}

const ListeningStatus = ({ isPlaying, hasTrack }: ListeningStatusProps) => {
  return (
    <h3 className="uppercase mb-2 text-[#a1a1aa] flex items-center gap-2">
      {hasTrack ? (
        <>
          {isPlaying ? "Listening Live" : "Listening Is Paused"}
          <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-[pulse_2s_ease-in-out_infinite]' : 'bg-gray-400'}`}></span>
        </>
      ) : (
        <>
          Listening Live
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        </>
      )}
    </h3>
  );
};

export default ListeningStatus;