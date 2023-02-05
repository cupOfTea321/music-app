import { FaPauseCircle, FaPlayCircle } from 'react-icons/all';

const PlayPause = ({isPlaying, handlePause, handlePlay, song, activeSong}) => (
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle  size={35} className={`text-gray-300`} onClick={handlePause}/>
  ) : (
    <FaPlayCircle size={35} className={`text-gray-300`} onClick={handlePlay}/>
  )
);

export default PlayPause;
