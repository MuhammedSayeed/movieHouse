import React, { useEffect, useState } from 'react'
import './GenreFilter.scss'
import { Outlet, useParams } from 'react-router-dom'
import { MoviesGenres, TvGenres } from './GenresContainer.js';

function GenreFilter() {

  let type = useParams().type;
  const [genreContainer, setGerneContainer] = useState([]);



  useEffect(() => {
    const SpecifyGenre = () => {
      if (type == 'movie') {
        setGerneContainer(MoviesGenres)
      } else if (type == 'tv') {
        setGerneContainer(TvGenres)
      }
    }
    SpecifyGenre();
  }, [])
  return <>

    <div className="genresContianer">
      {
        genreContainer.map((genre) => {
          return <div key={genre.id}>
            <button className='genre'>{genre.name}</button>
          </div>
        })
      }
    </div>
    <Outlet />
  </>
}

export default GenreFilter