import React, { useContext, useState } from 'react'
import './Navbar.scss'
import logo from '../../assets/imgs/logo.png'
import { FaBars } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { NavLink, Outlet, useNavigate, useNavigation } from 'react-router-dom'
import LoadingScreen from '../LoadingScreen/LoadingScreen.jsx'
import NavbarLinks from './NavbarLinks.jsx'
import { UserContext } from '../../Hooks/Context/AuthContext.jsx'
import Search from '../Search/Search.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearchStatus } from '../../store/Rtk/slices/searchSilce.jsx'
function Navbar() {
  const { logOut } = useContext(UserContext);
  const navigate = useNavigate();
  const [openMiniNav, setOpenMiniNav] = useState(false);
  const navigation = useNavigation();
  const open = useSelector(state => state.search.status);
  const dispatch = useDispatch();

  const handleOpenMiniBar = () => {
    setOpenMiniNav(!openMiniNav)
  }
  const handleLogOut = async () => {
    try {
      await logOut().then(() => {
        navigate('/auth');
        localStorage.removeItem("uid");
      })

    } catch (error) {
      console.log(error.message)
    }
  }
  const handleOpenSearchBar = ()=>{
    dispatch(changeSearchStatus());
  }


  return <>
    {open && <Search handleOpenSearchBar = {handleOpenSearchBar} />}
    <nav className='navbar'>
      <div className="left">
        <NavLink className='navbar-logo'>
          <img src={logo} alt="movie-house-logo" />
        </NavLink>
        <NavbarLinks show={false} />
      </div>
      <div onClick={handleOpenMiniBar} className="toggleBar">
        <FaBars />
      </div>
      <div className="right">
        <div className="searchAndLogout">
          <div onClick={handleOpenSearchBar} className="search">
            <BiSearch />
          </div>
          <div className="logout">
            <button onClick={handleLogOut} className='logout-btn'>
              LOGOUT
            </button>
          </div>
        </div>
      </div>
      {
        openMiniNav && <div className="miniNav"> <NavbarLinks handleLogOut={handleLogOut} handleOpenMiniBar={handleOpenMiniBar} handleOpenSearchBar={handleOpenSearchBar} show={true} /></div>
      }
    </nav>
    {navigation.state === 'loading' ? <LoadingScreen /> : <Outlet />}

  </>
}

export default Navbar