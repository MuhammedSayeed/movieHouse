import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../../assets/imgs/logo.png'
import NavbarLink from './NavbarLink.jsx'
import { FaBars } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { NavLink, Outlet, useNavigation } from 'react-router-dom'
import LoadingScreen from '../LoadingScreen/LoadingScreen.jsx'
function Navbar() {

  const [openMiniNav, setOpenMiniNav] = useState(false);
  const navigation = useNavigation();


  const handleOpenMiniBar = () => {
    setOpenMiniNav(!openMiniNav)
  }
  const search = {
    icon: <BiSearch />
  }

  return <>
    <nav className='navbar'>
      <div className="left">
        <NavLink className='navbar-logo'>
          <img src={logo} alt="movie-house-logo" />
        </NavLink>
        <NavbarLink show={false} />
      </div>
      <div onClick={handleOpenMiniBar} className="toggleBar">
        <FaBars />
      </div>
      <div className="right">
        <div className="searchAndLogout">
          <div className="search">
            {search.icon}
          </div>
          <div className="logout">
            <button className='logout'>
              LOGOUT
            </button>
          </div>
        </div>
      </div>
      {
        openMiniNav && <div className="miniNav"> <NavbarLink show={true} /></div>
      }
    </nav>
    {navigation.state === 'loading' ? <LoadingScreen /> : <Outlet />}

  </>
}

export default Navbar