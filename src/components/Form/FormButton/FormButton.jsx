import React from 'react'
import './FormButton.scss'
function FormButton({ name, operation }) {
  return <div className="btn-container">
    <button className='auth-btn' onClick={(e) => { operation(e) }}>{name}</button>
  </div>
}

export default FormButton