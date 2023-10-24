import React, { useEffect, useState } from 'react'
import './ShowDetails.scss'
import { useLoaderData, useParams } from 'react-router-dom'
import { getDetails, baseUrl_original, baseUrl_posterMid } from '../../services/api/api.js'
import { getYears, roundToOneDecimalPlace, truncateString } from '../../utils/utils.jsx';
import Gradiant from '../../components/Gradiant/Gradiant.jsx';
import { FaPlay } from 'react-icons/fa';
import useFirestore from '../../Hooks/useFirestore.jsx';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase.js';
import Spinner from '../../components/Spinner/Spinner.jsx'

function ShowDetails() {

  const { data, favoriteList } = useLoaderData();
  const userId = localStorage.getItem("uid")
  const [actors, setActors] = useState(data.credits.cast?.slice(0, 3));
  const [videoToken, setVideoToken] = useState("");
  const [added, setAdded] = useState(false);
  const { type } = useParams();
  const { readData, PostDataToApi } = useFirestore();
  const [loading, setLoading] = useState(true);


  const showData = {
    showId: data.id,
    title: data.original_name || data.original_title,
    posterPath: data.poster_path,
    realeaseDate: data.first_air_date || data.release_date,
    voteAverage: data.vote_average,
    type: data.original_name ? 'tv' : 'movie'
  }
  const playTrailer = () => {
    const trailerUrl = `https://www.youtube.com/watch?v=${videoToken}`;
    window.open(trailerUrl, '_blank');
  }

  const handleRemoveFromFavorites = async (id) => {
    await updateDoc(doc(db, "users", userId), {
      favList: favoriteList.filter(fav => fav.showId != id)
    }).then(() => {
      setAdded(false);
    })
  }

  const handleAddToFavorites = async () => {
    await PostDataToApi(showData).then(() => {
      setAdded(true);
    })
  }


  useEffect(() => {
    let isApiSubscribed = true;
    const renderTrailer = async () => {
      if (data.videos.results.length > 0) {
        const trailerObj = await data.videos.results.find(video => video.site == 'YouTube' && video.type == 'Trailer');
        setVideoToken(trailerObj?.key)
      }
    }
    if (isApiSubscribed) {
      renderTrailer();
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


  return <div style={{ backgroundImage: `url('${baseUrl_original}${data.backdrop_path}')` }}
    className="show-details-container">
    <div className="show-details-content">
      <div className="show-details">
        <div className="show-name">
          <h1>{data.name || data.original_title}</h1>
        </div>
        <div className="show-info">
          <div className="original-languauge">
            <p>{data.original_language}</p>
          </div>
          <div className="release-date">
            <p>{getYears(data?.first_air_date || data?.release_date)}</p>
          </div>
          <div className="show-actors">
            {
              actors.map((actor) => {
                return <div className="actor" key={actor.id}>
                  <p>{actor.name}</p>
                </div>
              })
            }
          </div>
        </div>
        <div className="show-tagline">
          <p>{data.tagline}</p>
        </div>
        <div className="rating">
          <p>Rating : {roundToOneDecimalPlace(data.vote_average)}</p>
        </div>
        <div className="show-type">
          {type}
        </div>
        <div className="show-btns">
          {
            loading ? <div>
              <Spinner size={'30px'} />
            </div> :
              (
                added ?
                  <button onClick={() => { handleRemoveFromFavorites(data.id) }} className='btn-style add'>Remove -</button>
                  :
                  <button onClick={() => { handleAddToFavorites() }} className='btn-style add'>Add +</button>
              )
          }
          <button onClick={playTrailer} className='btn-style play-trailer'>trailer <FaPlay /></button>
        </div>
      </div>
      <div className="separate-line"></div>
      <div className="more-details">
        <div className="show-poster">
          <div className="poster">
            <img src={`${baseUrl_posterMid}${data.poster_path}`} loading='lazy' alt={data.id} />
          </div>
          <div className="overview-and-genres">
            <div className='overview'>
              <p>{truncateString(130, data.overview)}</p>
            </div>
            <div className="show-genres">
              {
                data.genres?.slice(0, 2).map((genre) => {
                  return <p key={genre.id} className="show-genre">
                    {genre.name}
                  </p>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <Gradiant />
  </div>
}

export default ShowDetails

export const readData = async () => {
  const userId = localStorage.getItem("uid")

  if (userId) {
    const docSnap = await getDoc(doc(db, "users", userId));
    if (docSnap.exists()) {
      return docSnap.data().favList;
    }
  }
}
export const showDetailsLoader = async ({ params }) => {
  const response = await fetch(getDetails(params.type, params.id));
  const favoriteList = await readData();

  if (!response.ok) {
    throw json({ Message: `couldn't fetch details` },
      {
        status: 500
      })
  }
  else {
    const resData = await response.json();
    return {
      data: resData,
      favoriteList: favoriteList

    }
  }
} 