import React from 'react'
import './LoadingScreen.scss'
import logo from '../../assets/imgs/CINEMA-HOUSE-FOOTER.png'
function LoadingScreen() {
    return <div className="loadingScreen">
        <img loading='lazy' src={logo} alt="logo" />
        <p>loading...</p>
    </div>
}

export default LoadingScreen