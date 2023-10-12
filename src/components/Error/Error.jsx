import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'
import './Error.scss'

function Error() {
    const error = useRouteError();
    let navigate = useNavigate();

    let message = 'Something went wrong';
    if (error.status === 404) {
        message = "Sorry , we couldn't find the  you're looking for.";
    }
    if (error.status === 500) {
        message = `there was an error...`;
    }
    const handleHome = () => {
        navigate('/')
    }

    return <div className="error-container">
        <div className="text-center">
            <h1>
                <span className="fade-in" id="digit1">4</span>
                <span className="fade-in" id="digit2">0</span>
                <span className="fade-in" id="digit3">4</span>
            </h1>
            <h3 className="fadeIn">{message}</h3>
            <button onClick={() => { handleHome() }} type="button" name="button">Return To Home</button>
        </div>
    </div>
}

export default Error