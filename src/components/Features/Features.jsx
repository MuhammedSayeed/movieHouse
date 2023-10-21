import React from 'react'
import './Features.scss'
import { MdAccountCircle, MdChecklistRtl } from 'react-icons/md'
import { FaVideo } from 'react-icons/fa'
import logo from '../../assets/imgs/logo.png'
function Features({signupSwitch}) {
    return <div className="features-container">
        <div className="header">
            <div className="logo">
                <img src={logo} alt="movie-house-logo" />
            </div>
            <h2>{signupSwitch ? 'Create Free Account' : 'Welcome back'}</h2>
        </div> 
        {signupSwitch && <div className="features">
            <div className="icon">
                <MdAccountCircle />
                <h4>Free Account</h4>
            </div>
            <div className="icon">
                <MdChecklistRtl />
                <h4>Favorite List</h4>
            </div>
            <div className="icon">
                <FaVideo />
                <h4>Watch Trailers</h4>
            </div>
        </div> }
        
    </div>
}

export default Features