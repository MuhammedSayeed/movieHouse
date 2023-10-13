import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import AddToFavorites from '../AddToFavorites/AddToFavorites.jsx'
import { AiFillHeart } from 'react-icons/ai';
import {getYears, roundToOneDecimalPlace, truncateString} from '../../utils/utils.jsx'
import { baseUrl_posterMid } from '../../services/api/api.js';
function Card({type,showId,posterPath,title,realeaseDate,voteAverage}) {
    return <div className="card">
        <Link to={`/shows/${type}/${showId}`} className='cardPoster'>
            <img src={`${baseUrl_posterMid}${posterPath}`} loading='lazy' alt={title} />
        </Link>
        <div className="card-info">
            <div className="name-and-year">
                <p className="name">{truncateString(12, title)}</p>
                <p className="year">{getYears(realeaseDate)}</p>
            </div>
            <div className="add-and-rate">
                <AddToFavorites />
                <div className="rate">
                    <AiFillHeart/>
                    {roundToOneDecimalPlace(voteAverage)}
                </div>
            </div>
        </div>
    </div>
}

export default Card