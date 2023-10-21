import React from 'react'
import './Hero.scss'
import { getYears, truncateString } from '../../utils/utils.jsx';
import { NavLink } from 'react-router-dom';
function Hero({ data }) {

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
      <button className='add btn-style'>Add + </button>
      <NavLink to={`/shows/${data.original_name ? 'tv' : 'movie'}/${data.id}`} className='more btn-style'>More</NavLink>
    </div>
  </div>
}

export default Hero