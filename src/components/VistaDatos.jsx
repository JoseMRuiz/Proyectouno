import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSolicitudes } from '../hooks/useSolicitudes'
import { useSelector } from 'react-redux'
import authApi from '../api/authApi'

const VistaDatos = () => {
    const { fetchSolicitudes } = useSolicitudes()
    const solicitudes = useSelector(state => state.solicitudes)
    useEffect(() => {
        fetchSolicitudes()
        console.log(solicitudes.solicitudes)
    }, [])


    const handleAceptar = async (idsolicitudes) => {
        let estado = 2;
        console.log(idsolicitudes)
        try {
            const data = await authApi.put(`/solicitudes/solicitudes/${idsolicitudes}`,{estado})
            fetchSolicitudes()
            // console.log(data)
        } catch (error) {
            console.log(error)
        }

    }
    const handleDenegar = async (idsolicitudes) => {
        let estado = 3;
        console.log(idsolicitudes)
        try {
            const data = await authApi.put(`/solicitudes/solicitudes/${idsolicitudes}`,{estado})
            fetchSolicitudes()
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div className='flex h-full w-full'>
                <Sidebar />
                <div className=' rounded-tl-lg  flex flex-col justify-center items-center h-full w-full bg-gradient-to-r from-blue-800 via-blue-200 to-cyan-500'>
                    <TextField
                        class='rounded-tl-2xl shadow-2xl shadow-slate-900 rounded-br-2xl mt-20 bg-slate-50'
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        defaultValue="Ingrese el Dni"
                        variant="filled"
                    />
                    <div className="w-full h-full p-4 overflow-y-auto ">
                        <div className=' gap-8 p-4'>
                            {
                                solicitudes.solicitudes && solicitudes.solicitudes.length > 0 && solicitudes.solicitudes.map(s => (
                                    s.estado === 1 ? (
                                        <div className='bg-slate-200 min-w-1/2 rounded-xl shadow-lg w-full m-2'>
                                        <div className='p-5 shadow-2xl shadow-slate-900 flex flex-col'>
                                            <div className='rounded-xl overflow-hidden self-center'>
                                            </div>
                                            <h5 className='text-2xl md:text-xl  flex m-1 font-bold under '> Nombre y Apellido: <h6 className=' ml-4  font-normal text-black '>{s.empleadoNombre}</h6></h5>
                                            <h5 className='text-2xl md:text-xl  flex m-1 font-bold under '> Documento: <h6 className=' ml-4 font-normal text-black '>{s.empleadoDni}</h6></h5>
                                            <h5 className='text-2xl md:text-xl  flex m-1 font-bold under mb-4 '> Tipo de Solicitud: <h6 className=' ml-4 font-normal text-black'>{s.categoriaSolicitud}</h6></h5>

                                            <div className='flex'>
                                                <button 
                                                className='min-w-32 mr-6 text-center text-white bg-green-600  py-2 rounded-lg font-semibold hover:bg-green-300 focus:scale-95 transition-all duration-200 ease-out' 
                                                onClick={ () => handleAceptar(s.idsolicitudes)}
                                                > 
                                                    Aprobar  
                                                </button>
                                                <button
                                                className=' min-w-32 text-center text-white bg-red-800  py-2 rounded-lg font-semibold hover:bg-red-300 focus:scale-95 transition-all duration-200 ease-out'
                                                onClick={ () => handleDenegar(s.idsolicitudes)}
                                                >
                                                    Rechazar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    ) : null
                                    
                                ))

                            }
                        </div>
                    </div>
                </div>
            </div>










































        </>
    )
}

export default VistaDatos