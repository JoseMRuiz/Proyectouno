import { useState } from 'react'
import { TextField } from '@mui/material'
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
                <section class="flex flex-col md:flex-row bg-gray-400 h-screen items-center">
                    <div class="bg-gray-400 rounded-3xl shadow-2xl shadow-slate-800 justify-center items-center  h-full lg:block w-full md:w-1/2 xl:w-2/3 flex ">
                        <img src="/src/images/logotc.png" className=' m-auto mt-40 w-8/12 rounded-xl text-center'/>
                    </div>
                    <div class="bg-white w-full mr-4 ml-1 shadow-2xl rounded-3xl md:max-w-md lg:max-w-full  md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                        <div class="w-full ">
                            <img src="/src/images/logotribunal.jpg" className=' m-auto rounded-xl text-center '/>
                            <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Ingresar</h1>
                            <form class="mt-6" action="#" method="POST">
                                <div>
                                    
                                <input type="text" placeholder='email' className='w-64 m-auto rounded-lg bg-slate-600'/>
                                </div>
                                <div class="mt-4">
                                <input type="text" placeholder='contraseña' className='w-64 m-auto rounded-lg bg-slate-600'/>
                                </div>
                                <div class="text-right mt-2">
                                    <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Olvido su contraseña?</a>
                                </div>
                                <button type="submit" class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Iniciar Sesion</button>
                            </form>

                            <p class="mt-8">
                                No tienes Cuenta?
                                
                                <Link to="/Registro" className="ml-2 text-blue-500 hover:text-blue-700 font-semibold">Crea una Cuenta</Link>
                                    
                                
                            </p>
                            <p class="text-sm text-gray-500 mt-12">&copy; 2024 Tribunal de Cuentas - Todos los Derechos Reservados.</p>
                        </div>
                    </div>

</section>
        </>
    )
}

export default Loginn