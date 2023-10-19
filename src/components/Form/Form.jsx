import React, { useContext, useRef, useState } from 'react'
import './Form.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Hooks/Context/AuthContext.jsx';
import { createCollection } from '../../services/firebase/firebaseUtils.js';
import FormButton from './FormButton/FormButton.jsx';
import FormInput from './FormInput/FormInput.jsx';
import Spinner from '../Spinner/Spinner.jsx';
function Form() {
    const [alreadyUser, setAlreadyUser] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const { createUser, logIn } = useContext(UserContext);

    const handleErrorMessage = (message) => {
        switch (message) {
            case "Firebase: Password should be at least 6 characters (auth/weak-password).":
                setError("Password should be at least 6 characters")
                break;
            case "Firebase: Error (auth/invalid-email).":
                setError("Invalid email or password")
                break;
            case "Firebase: Error (auth/user-not-found).":
                setError("Invalid email or password")
                break;
            case "Firebase: Error (auth/wrong-password).":
                setError("Invalid email or password")
                break;
        }
    }
    const clearInputs = () => {
        emailRef.current.value = "";
        passRef.current.value = "";
    }
    const register = async (e) => {
        e.preventDefault();
        setLoading(true)
        if (emailRef.current.value == '' || passwordRef.current.value == '') {
            setLoading(false)
            return setError("email or password can't be empty")
        }
        try {
            await createUser(
                emailRef.current.value,
                passwordRef.current.value

            ).then((res) => {
                setLoading(false);
                navigate('/');
                localStorage.setItem("uid", res.user.uid);
                createCollection(res.user.uid);
            })
        } catch (err) {
            setLoading(false);
            handleErrorMessage(err.message)
            clearInputs();
        }
    }
    const signIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await logIn(
                emailRef.current.value,
                passwordRef.current.value
            ).then((res) => {
                setLoading(false);
                navigate('/');
                localStorage.setItem("uid", res.user.uid);

            })
        } catch (err) {
            handleErrorMessage(err.message);
            setLoading(false);
            clearInputs();
        }
    }
    const switchBtn = () => {
        setAlreadyUser(!alreadyUser)
        setError("");
    }

    return (
        <form className='form-auth'>
            <div className="error-message-container">
                <p >{error}</p>
            </div>
            <FormInput setError={setError} refInput={emailRef} id={'email'} label={'email'} type={'email'} placeholder={'Type here'} />
            <FormInput setError={setError} refInput={passwordRef} id={'password'} label={'password'} type={'password'} placeholder={'Type here'} />
            {
                alreadyUser
                    ?
                    (loading ? <Spinner /> : <FormButton name={'Sign In'} operation={signIn} />)
                    :
                    (loading ? <Spinner /> : <FormButton name={'Register'} operation={register} />)
            }

            <div className="already-user-or-new-user">
                {
                    alreadyUser ? <p>new user? <NavLink onClick={switchBtn}>Sign Up</NavLink></p>
                        : <p>already user? <NavLink onClick={switchBtn}>Sign In</NavLink></p>
                }

            </div>
        </form>
    )
}

export default Form