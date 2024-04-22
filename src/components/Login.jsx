import { useState } from 'react'
import { TextField } from '@mui/material'
import "../stylesheets/Login.css"
import { Link } from 'react-router-dom';
import authApi from '../api/authApi';
import { useForm } from '../hooks/useForms';
import { useAuth } from '../hooks/useAuth';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

function Loginn() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const { errorMessage, startLogin } = useAuth();

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
        setShowRegisterForm(false);
    };

    const toggleRegisterForm = () => {
        setShowRegisterForm(!showRegisterForm);
        setShowLoginForm(false);
    };
    const loginSubmit = async (event) => {
        console.log(loginEmail, loginPassword)
        event.preventDefault();
        await startLogin({ email: loginEmail, password: loginPassword })
    }
    return (
        <>
            <div className='w-full bg-slate-600'>
                <div class="container">
                    <div class="main">
                        <div class="login">
                            <button className='button' onClick={toggleLoginForm}>inciar Sesion</button>
                            {showLoginForm && (
                                <form class="form-login" onSubmit={loginSubmit}>
                                    <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" name='loginEmail' value={loginEmail} onChange={onLoginInputChange} />
                                    <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" name='loginPassword' value={loginPassword} onChange={onLoginInputChange} />
                                    <button type='submit' className=' hover:bg-slate-500 rounded-lg' >iniciar sesion</button>
                                </form>
                            )}
                            <div class="register">
                                <button className='button' onClick={toggleRegisterForm}>Registrarse</button>
                                {showRegisterForm && (
                                    <form class="form-register">
                                        <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" />
                                        <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" />
                                        <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" />
                                        <button className=' hover:bg-slate-500 rounded-lg'>Registrarse</button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loginn