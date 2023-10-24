import React from 'react'
import { BiSearch } from "react-icons/bi";
import { NavLink} from "react-router-dom";
function NavbarLinks({ handleLogOut , show, handleOpenMiniBar , handleOpenSearchBar }) {
    const Links = [
        { name: "Home", path: '/', id: 1 },
        { name: "Movies", path: 'shows/movie/28/1', id: 2 },
        { name: "TvShow", path: 'shows/tv/10759/1', id: 3 },
        { name: "Favorites", path: 'favorites', id: 4 },
        { name: "Recommendition", path: 'recommenditons', id: 5 },
    ]


    



    return <>
        <div className="links">
            {
                Links.map((link) => {
                    return <NavLink onClick={handleOpenMiniBar} to={link.path} key={link.id}>
                        {link.name}
                    </NavLink>
                })
            }
        </div>
        {show && <div className="searchAndLogout">
            <div onClick={ ()=>{handleOpenSearchBar(); handleOpenMiniBar(); }   } className="search">
                <BiSearch />
            </div>
            <div className="logout">
                <button onClick={handleLogOut} className='logout-btn'>
                    LOGOUT
                </button>
            </div>
        </div>}

    </>

}

export default NavbarLinks