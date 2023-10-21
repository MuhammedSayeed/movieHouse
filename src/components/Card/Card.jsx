import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import AddToFavorites from '../AddToFavorites/AddToFavorites.jsx'
import { AiFillHeart } from 'react-icons/ai';
import {getYears, roundToOneDecimalPlace, truncateString} from '../../utils/utils.jsx'
import { baseUrl_posterMid } from '../../services/api/api.js';
function Card({showData}) {
    return <div className="card">
        <Link to={`/shows/${showData.type}/${showData.showId}`} className='cardPoster'>
            <img src={`${baseUrl_posterMid}${showData.posterPath}`} loading='lazy' alt={showData.title} />
        </Link>
        <div className="card-info">
            <div className="name-and-year">
                <p className="name">{truncateString(12, showData.title)}</p>
                <p className="year">{getYears(showData.realeaseDate)}</p>
            </div>
            <div className="add-and-rate">
                <AddToFavorites showData = {showData} />
                <div className="rate">
                    <AiFillHeart/>
                    {roundToOneDecimalPlace(showData.voteAverage)}
                </div>
            </div>
        </div>
    </div>
}

export default Card