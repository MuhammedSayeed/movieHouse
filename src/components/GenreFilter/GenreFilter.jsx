import React, { useEffect, useState } from 'react'
import './GenreFilter.scss'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { MoviesGenres, TvGenres } from './GenresContainer.js';

function GenreFilter() {

  let { type } = useParams()
  let { genre } = useParams();
  let currentGenre = parseInt(genre);
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
          return <NavLink to={`${type}/${genre.id}/1`} key={genre.id} className={genre.id == currentGenre ? 'genre active' : 'genre'}>{genre.name}</NavLink>

        })
      }
    </div>
    <Outlet />
  </>
}

export default GenreFilter