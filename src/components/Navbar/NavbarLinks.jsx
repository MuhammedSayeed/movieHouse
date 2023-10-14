import React from 'react'
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
function NavbarLinks({ show,handleOpenMiniBar }) {
    const Links = [
        { name: "Home", path: '/', id: 1 },
        { name: "Movies", path: 'shows/movie/28/1', id: 2 },
        { name: "TvShow", path: 'shows/tv/10759/1', id: 3 },
        { name: "Favorites", path: 'favorites', id: 4 },
        { name: "Recommendition", path: 'recommenditon', id: 5 },
    ]

    const search = {
        icon: <BiSearch />
    }

    

    return <>
        <div className="links">
            {
                Links.map((link) => {
                    return <NavLink  onClick={handleOpenMiniBar} to={link.path} key={link.id}>
                        {link.name}
                    </NavLink>
                })
            }
        </div>
        {show && <div className="searchAndLogout">
            <div className="search">
                {search.icon}
            </div>
            <div className="logout">
                <button className='logout'>
                    LOGOUT
                </button>
            </div>
        </div>}

    </>

}

export default NavbarLinks