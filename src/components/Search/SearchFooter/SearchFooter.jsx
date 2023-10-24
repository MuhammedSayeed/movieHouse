import React from 'react'
import './SearchFooter.scss'
import footerLogo from '../../../assets/imgs/CINEMA-HOUSE-FOOTER.png'
function SearchFooter({ selectMediaType, activeType }) {

    const searchTypes = [
        {
            name: 'Movies',
            id: 1,
            type: 'movie',

        },
        {
            name: 'Series',
            id: 2,
            type: 'tv'

        },
    ]

    return <div className="footer-search">
        <div className="search-type">
            {searchTypes.map((type) => {
                return <button
                    onClick={() => { selectMediaType(type.id, type.type) }}
                    key={type.id}
                    className={activeType == type.id ? 'active' : ""}>
                    {type.name}
                </button>
            })}
        </div>
        <div className="logo">
            <img src={footerLogo} alt="movie-house-logo" />
        </div>
    </div>
}

export default SearchFooter