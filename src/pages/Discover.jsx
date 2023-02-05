import { genres } from '../assets/constants';
import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { useDispatch, useSelector } from 'react-redux';

const Discover = () => {
  const dispatch = useDispatch()

  // определяет какой именно кусок state будет использоваться
  const {activeSong, isPlaying} = useSelector((state) => state.player)

  const {data, isFetching, error} = useGetTopChartsQuery()
  console.log(data);
  const genreTitle = 'Pop'

  if (isFetching) return <Loader title={'Loading songs...'}/>
  if (error) return <Error/>
  return (
    <div className={'flex flex-col'}>
      <div className={'w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'}>
        <h2 className={`font-bold text-3xl text-white text-left`}>Discover</h2>
        <select
          onClick={() => {}}
          value={''}
          className={'bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'}
        >
          {genres.map(genre => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>
      <div className={`flex flex-wrap sm:justify-start justify-center gap-8`}>
        {data?.map((song, i) => (
          <SongCard data={data} key={song.key} song={song} i={i} isPlaing={isPlaying} activeSong={activeSong}/>
        ))}
      </div>
    </div>
  );
}

export default Discover;