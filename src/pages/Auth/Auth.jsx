import React, { useState } from 'react'
import './Auth.scss'
import bg from '../../assets/imgs/hero.png'
import Gradiant from '../../components/Gradiant/Gradiant.jsx'
import Features from '../../components/Features/Features.jsx'
import Form from '../../components/Form/Form.jsx'
function Auth() {

    const [signupSwitch,setSignupSwitch] = useState(true);


    return <>
        <div style={{ backgroundImage: `url('${bg}')` }} className="Auth-container">
            <div className="Auth-content">
                <Features signupSwitch={signupSwitch} />
                <Form signupSwitch = {signupSwitch} setSignupSwitch= {setSignupSwitch} />
            </div>

            <Gradiant Auth={true} />
        </div>


    </>
}

export default Auth