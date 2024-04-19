import React from 'react'
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (

        <>
            <div className='flex w-full gap-2'>
                <div className='w-full h-1/2  max-h-full'>
                    <div className='bg-slate-200 w-full h-full rounded-xl p-2 shadow-lg flex flex-col justify-center items-center'>
                        <img src="/src/images/form.png" className='w-80 rounded-xl ' />
                        <h5 className='text-2xl md:text-3xl font-medium'>Solicitar Formulario</h5>
                        <p className='text-slate-800 text-lg '> Ingrese al formulario para solicitar o informar su inasistencia</p>
                        <Link to="/Form"><button className='text-center p-4  mt-12 bg-blue-400 text-blue-700  rounded-lg font-semibold hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'> Ir a Formulario  </button></Link>
                    </div>
                </div>
                <div className='w-full h-1/2  max-h-full'>
                    <div className='bg-slate-200 w-full h-full rounded-xl p-2 shadow-lg flex flex-col justify-center items-center'>
                        <img src="/src/images/form.png" className='w-80 rounded-xl ' />
                        <h5 className='text-2xl md:text-3xl font-medium'>Solicitudes Realizadas</h5>
                        <p className='text-slate-800 text-lg '>Consulte el estado de sus solicitudes</p>
                        <Link to="/Form"><button className='text-center p-4  mt-12 bg-blue-400 text-blue-700  rounded-lg font-semibold hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'> Ir a Solicitudes </button></Link>
                    </div>
                </div>
                <div className='w-full h-1/2  max-h-full'>
                    <div className='bg-slate-200 w-full h-full rounded-xl p-2 shadow-lg flex flex-col justify-center items-center'>
                        <img src="/src/images/form.png" className='w-80 rounded-xl ' />
                        <h5 className='text-2xl md:text-3xl font-medium'>Datos Personales</h5>
                        <p className='text-slate-800 text-lg '> Revise los datos y detalles de su cuenta</p>
                        <Link to="/Form"><button className='text-center p-4  mt-12 bg-blue-400 text-blue-700  rounded-lg font-semibold hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'> Ir a Datos Personales  </button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Inicio