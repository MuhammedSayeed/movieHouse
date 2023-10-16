import React from 'react'
import './List.scss'
import Card from '../Card/Card.jsx'
function List({ data }) {

    console.log(data);
    return <>
        <div className="list">
            {
                data.length < 1 ?
                    <h1 style={{ backgroundColor: `white` }}>Loading</h1>
                    :
                    data.map((show) => {
                        if(show.poster_path){
                            return <Card
                            key={show.id}
                            title={show.title ? show.original_title : show.original_name}
                            realeaseDate={show.title ? show.release_date : show.first_air_date}
                            showId={show.id} voteAverage={show.vote_average}
                            type={show.title ? 'movie' : 'tv'} 
                            posterPath={show.poster_path}
                        />
                        }


                    })
            }

        </div>


    </>
}

export default List