import React from 'react'
import './FormButton.scss'
function FormButton({name , operation}) {
  return <button className='auth-btn' onClick={(e)=>{operation(e)}}>{name}</button>
}

export default FormButton