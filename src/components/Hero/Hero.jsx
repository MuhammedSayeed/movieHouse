import React from 'react'
import './Hero.scss'
import { getYears, truncateString } from '../../utils/utils.jsx';
function Hero({ data }) {

  console.log(data);
  return <div className="heroContent">
    <div className="show-name">
      <h1>{data.original_name || data.original_title}</h1>
    </div>
    <div className="show-desc">
      <p>{truncateString(170, data.overview)}</p>
    </div>
    <div className="more-info">
      <div className="realse-and-time">
        {(data?.first_air_date || data?.release_date) && <p className='realese_time'>{getYears(data?.first_air_date || data?.release_date)}</p>}
      </div>
      <div className='quality'>4K</div>
    </div>
    <div className="show-btns">
      <button className='add btn-style'>Add + </button>
      <button className='more btn-style'>More</button>

    </div>
  </div>
}

export default Hero