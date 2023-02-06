import SongBar from './SongBar';

const RelatedSongs = ({data, activeSong, artistId, isPlaying, handlePlayClick, handlePauseClick}) => {
  // console.log(data);
  return(
    <div className={`flex flex-col`}>
      <h1 className={`font-bold text-3xl text-white`}>
        Related Songs:
      </h1>
      <div className={`mt-6 w-full flex flex-col`}>
        {data?.map((song, i) => (
          <SongBar
            key={`${song.key}-${artistId}`}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            artistId={artistId}
            handlePlayClick={handlePlayClick}
            handlePauseClick={handlePauseClick}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedSongs;
