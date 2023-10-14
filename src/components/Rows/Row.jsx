import React, { useEffect, useState } from 'react'
import './Row.scss'
import { NavLink } from 'react-router-dom';
import * as api from '../../services/api/api.js'
import { truncateString } from '../../utils/utils.jsx';
import axios from 'axios';
function Row({ apiUrl, title, bigPoster }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        let isApiSubscribed = true;
        const fetchTrending = async () => {
            const request = await axios(apiUrl);
            setData(request.data.results);
        }
        if (isApiSubscribed) {
            fetchTrending();
        }
        return () => {
            isApiSubscribed = false;
        }
    }, [])
    return <>
        <div className="row-container">
            <h2 className='row-title'>{title}</h2>
            <div className="slider">
                {
                    data.map((show)=>{
                        return <NavLink className={bigPoster ? 'showBackDrop' : 'showPoster'} to={`/shows/${show.original_name? 'tv' : 'movie'}/${show.id}`} key={show.id}>
                                <img src={bigPoster ? `${api.small_backdrop}${show.backdrop_path}` : `${api.baserUrl_posterSmall}${show.poster_path}`} alt={show.title} loading='lazy' />
                                {
                                    bigPoster && <div className="title">
                                        <p>{truncateString(10,show?.original_name)}</p>
                                    </div>
                                }
                                {
                                    bigPoster && <div className="overlay">
                                    </div>
                                }
                        </NavLink>
                    })
                }
            </div>
        </div>
    </>
}

export default Row