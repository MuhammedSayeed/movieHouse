import React, { useEffect, useState } from 'react'
import './ShowDetails.scss'
import { useLoaderData, useParams } from 'react-router-dom'
import { getDetails, baseUrl_original, baseUrl_posterMid} from '../../services/api/api.js'
import { getYears, roundToOneDecimalPlace, truncateString } from '../../utils/utils.jsx';
import Gradiant from '../../components/Gradiant/Gradiant.jsx';
import { FaPlay } from 'react-icons/fa';
import { updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase.js';

function ShowDetails() {

  const data = useLoaderData();
  const userId = localStorage.getItem("uid")
  const [actors, setActors] = useState(data.credits.cast?.slice(0, 3));
  const [videoToken,setVideoToken] = useState("");
  const [added, setAdded] = useState(false);
  const { type } = useParams();


  const playTrailer = ()=>{
    const trailerUrl = `https://www.youtube.com/watch?v=${videoToken}`;
    window.open(trailerUrl, '_blank');
  }
  const handleAddToFavorites = async (data) => {
    setAdded(true);
    PostDataToApi(data)
}
const handleRemoveFromFavorites = async (id) => {
    await updateDoc(doc(db, "users", userId), {
        favList: favoriteList.filter(fav => fav.showId != id)
    }).then(()=>{
        setAdded(false)
    })
}

  useEffect(()=>{
    const renderTrailer = async ()=>{
      if (data.videos.results.length > 0) {
        const trailerObj = await data.videos.results.find(video => video.site == 'YouTube' && video.type == 'Trailer');
        setVideoToken(trailerObj?.key)
    }
    }
    let isApiSubscribed = true;
    if(isApiSubscribed){
      renderTrailer();
    }
    return ()=>{
      isApiSubscribed = false;
    }
  },[])

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
          <button className='btn-style add'>Add +</button>
          <button onClick={playTrailer} className='btn-style play-trailer'>trailer <FaPlay/></button>
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

export const showDetailsLoader = async ({ params }) => {
  const response = await fetch(getDetails(params.type, params.id));
  if (!response.ok) {
    throw json({ Message: `couldn't fetch details` },
      {
        status: 500
      })
  }
  else {
    const resData = await response.json();
    return resData
  }
} 