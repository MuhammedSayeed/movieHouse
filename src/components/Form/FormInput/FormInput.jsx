import React from 'react'
import './FormInput.scss'
function FormInput({ setError , refInput , label, name, type, placeholder, id }) {
    return (
        <div className="form-input-control">
            <label htmlFor={id} className='label-input'>
                {label}
            </label>
            <input onChange={()=>{setError("")}} ref={refInput} className='form-input' id={id} name={name} type={type} placeholder={placeholder} />
        </div>
    )
}

export default FormInput