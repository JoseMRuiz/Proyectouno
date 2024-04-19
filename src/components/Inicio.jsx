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
            {/* <div classname="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                    <div className='rounded-xl shadow-lg'>
                        <div className='p-5 flex flex-col'>
                            <div className='rounded-xl overflow-hidden self-center'>
                                <img src="/src/images/form.png" className='w-64 ' />
                            </div>
                            <h5 className='text-2xl md:text-3xl font-medium mt-3'>solicitar formulario1</h5>
                            <p className='text-slate-800 text-lg mt-3'> Ingrese al formulario para solicitar o informar su inasistencia</p>
                            <Link to="/Form"><button className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'> Ir a Formulario  </button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div classname="flex items-center justify-center min-h-screen container mx-auto">
                <div classname="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                    <div className='rounded-xl shadow-lg'>
                        <div className='p-5 flex flex-col'>
                            <div className='rounded-xl overflow-hidden self-center'>
                                <img src="/src/images/form.png" className='w-64 ' />
                            </div>
                            <h5 className='text-2xl md:text-3xl font-medium mt-3'>Presentar ficha</h5>
                            <p className='text-slate-800 text-lg mt-3'> ingrese la ficha medica solicitada </p>
                            <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'> Ir a Formulario  </a>
                        </div>
                    </div>
                </div>
            </div>
            <div classname="flex items-center justify-center min-h-screen container mx-auto">
                <div classname="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                    <div className='rounded-xl shadow-lg'>
                        <div className='p-5 flex flex-col'>
                            <div className='rounded-xl overflow-hidden self-center'>
                                <img src="/src/images/form.png" className='w-64 ' />
                            </div>
                            <h5 className='text-2xl md:text-3xl font-medium mt-3'>solicitar formulario</h5>
                            <p className='text-slate-800 text-lg mt-3'> Ingrese al formulario para solicitar o informar su inasistencia</p>
                            <a href="#" className='text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out'> Ir a Formulario  </a>
                        </div>
                    </div>
                </div> */}

        </>
    );
}


export default Inicio