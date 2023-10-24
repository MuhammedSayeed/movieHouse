import React from 'react'
import './SearchResults.scss'
import { baserUrl_posterSmall } from '../../../services/api/api.js'

function SearchResults({ data }) {
    return <div className="search-results">
        {
            data.length == 0 ?
                <div className="no-results-found">
                    <p>No results found</p>
                </div>
                :
                data.map((show) => {
                    if (show.poster_path != null) {
                        return <div key={show.id} className="show">
                            <img loading='lazy' src={`${baserUrl_posterSmall}${show.poster_path}`} alt={show.original_title || show.original_name} />
                            <div className="show-title">
                                <p>{show.original_title || show.original_name}</p>
                            </div>
                        </div>
                    }
                })
        }

    </div>
}

export default SearchResults