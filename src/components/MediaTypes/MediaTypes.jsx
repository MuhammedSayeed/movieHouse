import React from 'react'
import './MediaTypes.scss'
import mediaTypes from './MediaTypesContainer.jsx'
import { NavLink } from 'react-router-dom'

function MediaTypes() {
    return <>
        <div className="mediaType-container">
            <h1>Select media type</h1>
            <div className="mediaTypes">
                {
                    mediaTypes.map((media) => {
                        return <NavLink to={media.type} className='media' key={media.id}>
                            <div className="icon">
                                {media.icon}
                            </div>
                            <h3>
                                {media.name}
                            </h3>
                        </NavLink>
                    })
                }
            </div>
        </div>

    </>
}

export default MediaTypes