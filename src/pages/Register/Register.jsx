import React from 'react'
import './Register.scss'
import bg from '../../assets/imgs/hero.png'
import Gradiant from '../../components/Gradiant/Gradiant.jsx'
import Features from '../../components/Features/Features.jsx'
import Form from '../../components/Form/Form.jsx'
function Register() {




    return <>
        <div style={{ backgroundImage: `url('${bg}')` }} className="Register-container">
            <div className="register-content">
                <Features />
                <Form  />
            </div>

            <Gradiant register={true} />
        </div>


    </>
}

export default Register