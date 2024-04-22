import React from 'react'
import Sidebar from './Sidebar'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'

const VistaDatos = () => {
    return (
        <>



            <div className='flex h-full   w-full'>
                <Sidebar />
                <div className=' rounded-tl-lg  flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-r from-blue-800 via-blue-200 to-cyan-500'>
                    <TextField
                        class='rounded-tl-2xl rounded-br-2xl mt-20 bg-slate-50'
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        defaultValue="ingrese el dni"
                        variant="filled"
                    />
                    <div className="flex items-center justify-center flex-grow">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <div classname="flex items-center justify-center min-h-screen container mx-auto">
                                <div className='bg-slate-300 m-1 rounded-xl shadow-lg'>
                                    <div className='p-5 flex flex-col'>
                                        <div className='rounded-xl overflow-hidden self-center'>
                                        </div>
                                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Nombre y apellido </h5>
                                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>DNI </h5>


                                        <p className='text-black text-lg mb-1 mt-3'> tipo de solicitud </p>
                                        <div className='flex'>
                                            <button className='min-w-32 text-center bg-green-600 text-slate-600 py-2 rounded-lg font-semibold hover:bg-green-300 focus:scale-95 transition-all duration-200 ease-out'> Aceptar  </button>
                                            <button className=' min-w-32 text-center bg-red-800 text-slate-600 py-2 rounded-lg font-semibold hover:bg-red-300 focus:scale-95 transition-all duration-200 ease-out'>X</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='bg-slate-300 m-1 rounded-xl shadow-lg'>
                                    <div className='p-5 flex flex-col'>
                                        <div className='rounded-xl overflow-hidden self-center'>
                                        </div>
                                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Nombre y apellido </h5>
                                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>DNI </h5>


                                        <p className='text-black text-lg mb-1 mt-3'> tipo de solicitud </p>
                                        <div className='flex'>
                                            <button className='min-w-32 text-center bg-green-600 text-slate-600 py-2 rounded-lg font-semibold hover:bg-green-300 focus:scale-95 transition-all duration-200 ease-out'> Aceptar  </button>
                                            <button className=' min-w-32 text-center bg-red-800 text-slate-600 py-2 rounded-lg font-semibold hover:bg-red-300 focus:scale-95 transition-all duration-200 ease-out'>X</button>
                                        </div>

                                    </div>
                                </div>
                                <div className='bg-slate-300 m-1 rounded-xl shadow-lg'>
                                    <div className='p-5 flex flex-col'>
                                        <div className='rounded-xl overflow-hidden self-center'>
                                        </div>
                                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Nombre y apellido </h5>
                                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>DNI </h5>


                                        <p className='text-black text-lg mb-1 mt-3'> tipo de solicitud </p>
                                        <div className='flex'>
                                            <button className='min-w-32 text-center bg-green-600 text-slate-600 py-2 rounded-lg font-semibold hover:bg-green-300 focus:scale-95 transition-all duration-200 ease-out'> Aceptar  </button>
                                            <button className=' min-w-32 text-center bg-red-800 text-slate-600 py-2 rounded-lg font-semibold hover:bg-red-300 focus:scale-95 transition-all duration-200 ease-out'>X</button>
                                        </div>

                                    </div>
                                </div>
                                <div className='bg-slate-300 m-1 rounded-xl shadow-lg'>
                                    <div className='p-5 flex flex-col'>
                                        <div className='rounded-xl overflow-hidden self-center'>
                                        </div>
                                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Nombre y apellido </h5>
                                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>DNI </h5>


                                        <p className='text-black text-lg mb-1 mt-3'> tipo de solicitud </p>
                                        <div className='flex'>
                                            <button className='min-w-32 text-center bg-green-600 text-slate-600 py-2 rounded-lg font-semibold hover:bg-green-300 focus:scale-95 transition-all duration-200 ease-out'> Aceptar  </button>
                                            <button className=' min-w-32 text-center bg-red-800 text-slate-600 py-2 rounded-lg font-semibold hover:bg-red-300 focus:scale-95 transition-all duration-200 ease-out'>X</button>
                                        </div>

                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>










































        </>
    )
}

export default VistaDatos