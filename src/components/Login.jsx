import { useState } from 'react'
import { TextField } from '@mui/material'
import "../stylesheets/Login.css"
import { Link } from 'react-router-dom';

function Loginn () {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
        setShowRegisterForm(false); 
    };

    const toggleRegisterForm = () => {
        setShowRegisterForm(!showRegisterForm);
        setShowLoginForm(false); 
    };

return (
        <>
        <div className='w-full bg-slate-600'>

        
        
        <div class="container">
            <div class="main">
                <div class="login">
                <button className='button' onClick={toggleLoginForm}>inciar Sesion</button>
            {showLoginForm && (
                    <form class="form-login">
                        
                        <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" />
                        <Link to="/Pantalla_postLogin"><button className=' hover:bg-slate-500 rounded-lg'>iniciar sesion</button></Link>
                        
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