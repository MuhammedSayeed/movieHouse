import React from 'react'
import './Genres.scss'
import * as genresContainer from './genreTypes.jsx'
import { NavLink, useLoaderData } from 'react-router-dom'
function Genres() {

    const genres = useLoaderData();

    console.log(genres);

    return <>
        <div className="genres-container">
            <h1>Select genre</h1>
            <div className="genres-layout">
            {
                genres.map((genre)=>{
                    return <NavLink className='genre' key={genre.id} to={`${genre.id}/results`}>
                        <div className="icon">
                            {genre.icon}
                        </div>
                        <h3>
                            {genre.name}
                        </h3>
                    </NavLink>
                })
            }
            </div>
        </div>

    </>
}

export default Genres

export const genresLoader = ({params}) =>{
    if(params.media == 'movie'){
        return genresContainer.MoviesGenreTypes;
    }else if (params.media == 'tv'){
        return genresContainer.TvGenreTypes
    }
}