import React from 'react'
import './Spinner.scss'
function Spinner({size}) {
  return (
    <div style={{width : size , height : size}} className="spinner">
      <div className="spinner-inner"></div>
    </div>
  )
}

export default Spinner