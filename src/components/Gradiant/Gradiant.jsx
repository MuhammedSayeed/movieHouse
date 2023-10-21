import React from 'react'
import './Gradiant.scss'
function Gradiant({ Auth }) {

    if (Auth) {

        return <>
        <div className='fade-bottom'></div>
    </>

    }

    return <>
    <div className="banner_fadeLeft"></div>
    <div className="banner_fadeLeft"></div>
    <div className="banner_fadeLeft"></div>
    <div className="banner_fadeBottom"></div>
</>

}

export default Gradiant