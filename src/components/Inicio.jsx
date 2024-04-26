import React from 'react'
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
        <>
            <div className='flex w-full bg-gradient-to-r from-blue-800 via-blue-200 to-cyan-500 gap-2 p-4'>
                <div className='w-full h-96  max-h-full'>
                    <div className='bg-slate-200 w-full h-full rounded-xl p-2  shadow-lg flex flex-col justify-center items-center'>
                        <img src="/src/images/form.png" className='w-72  p-2 rounded-xl ' />
                        <h5 className='text-2xl md:text-3xl font-medium'>Solicitar Formulario</h5>
                        <p className='text-slate-800 text-lg text-center p-2 '> Ingrese al formulario para solicitar o informar su inasistencia</p>
                        <Link to="/Form"><button className='text-center p-4  mt-4 bg-blue-400 text-blue-700  rounded-lg font-semibold hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'> Ir a Formulario  </button></Link>
                    </div>
                </div>
                <div className='w-full h-96 max-h-full'>
                    <div className='bg-slate-200 w-full h-full rounded-xl p-2 shadow-lg flex flex-col justify-center items-center'>
                        <img src="/src/images/img-solicitud.jpg" className='w-80 rounded-xl ' />
                        <h5 className='text-2xl md:text-3xl font-medium'>Solicitudes Realizadas</h5>
                        <p className='text-slate-800 text-lg '>Controle las solicitudes realizadas</p>
                        <Link to="/VistaDatos"><button className='text-center p-4  mt-4 bg-blue-400 text-blue-700  rounded-lg font-semibold hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'> Ir a Solicitudes </button></Link>
                    </div>
                </div>
                <div className='w-full h-96  max-h-full'>
                    <div className='bg-slate-200 w-full h-full rounded-xl p-2 shadow-lg flex flex-col justify-center items-center'>
                        <img src="/src/images/datos-personales.png" className=' size-44 w-64 rounded-xl ' />
                        <h5 className='text-2xl md:text-3xl font-medium'>Datos Personales</h5>
                        <p className='text-slate-800 text-lg '> Revise los datos y detalles de su cuenta</p>
                        <Link to="/Usuario"><button className='text-center p-4  mt-4 bg-blue-400 text-blue-700  rounded-lg font-semibold hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'> Ir a Datos Personales  </button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Inicio