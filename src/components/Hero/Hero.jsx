import React, { useEffect, useState } from 'react'
import './Hero.scss'
import { getYears, truncateString } from '../../utils/utils.jsx';
import { NavLink } from 'react-router-dom';
import useFirestore from '../../Hooks/useFirestore.jsx';
import Spinner from '../Spinner/Spinner.jsx';
function Hero({ data }) {

  const { readData, addAndRead, removeAndRead } = useFirestore();
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(true);
  const showData = {
    showId: data.id,
    title: data.original_name || data.original_title,
    posterPath: data.poster_path,
    realeaseDate: data.first_air_date || data.release_date,
    voteAverage: data.vote_average,
    type: data.original_name ? 'tv' : 'movie'
  }

  const handleAddToFavorites = async () => {
    await addAndRead(showData, data.id)
    setAdded(true);
  }
  const handleRemoveFromFavorites = async () => {
    await removeAndRead(showData, data.id);
    setAdded(false)
  }

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      readData(data.id).then((res) => {
        setLoading(false);
        if (res) {
          setAdded(true);
        }
      })
    }

    return () => {
      isApiSubscribed = false;
    }
  }, [])


  return <div className="heroContent">
    <div className="show-name">
      <h1>{truncateString(8, data?.original_name) || truncateString(8, data?.original_title)}</h1>
    </div>
    <div className="show-desc">
      <p>{truncateString(85, data.overview)}</p>
    </div>
    <div className="more-info">
      <div className="realse-and-time">
        {(data?.first_air_date || data?.release_date) && <p className='realese_time'>{getYears(data?.first_air_date || data?.release_date)}</p>}
      </div>
      <div className='quality'>4K</div>
    </div>
    <div className="show-btns">

      {
        loading ? <div>
          <Spinner size={'30px'} />
        </div> :
          (
            added ?
              <button onClick={handleRemoveFromFavorites} className='add btn-style'>Remove - </button>
              :
              <button onClick={handleAddToFavorites} className='add btn-style'>Add + </button>
          )
      }

      <NavLink to={`/shows/${data.original_name ? 'tv' : 'movie'}/${data.id}`} className='more btn-style'>More</NavLink>
    </div>
  </div>
}

export default Hero