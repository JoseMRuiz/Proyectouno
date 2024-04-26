import React, { useState, useEffect } from 'react'
import logotc from '../images/logotc.png'
import Sidebar from './Sidebar';
import authApi from '../api/authApi';
import { useSelector } from 'react-redux';
import { useSolicitudes } from '../hooks/useSolicitudes';
const Form = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [dni, setDni] = useState(null);
    const [showInput, setShowInput] = useState(false);
    const { user } = useSelector(state => state.auth)
    const { solicitudesByDni } = useSelector(state => state.solicitudes)
    const [cardCount, setCardCount] = useState(0);

    const { fetchByDni } = useSolicitudes()

    useEffect(() => {
        fetchByDni(user.dni)
    }, [])

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        console.log(e.target.value)
    }

    const handleSolicitarClick = async () => {
        setCardCount(prevCount => prevCount + 1);
        try {

            console.log(user)
            const response = await authApi.post('/solicitudes/', {
                dni: user.dni, categoriaSolicitud: selectedOption, empleado: user
            })

            fetchByDni(user.dni)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    };
    const isSolicitudAceptada = true;

    const formatDate = (fecha) => {
        console.log(fecha)
        const date = new Date(fecha);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Los meses comienzan desde 0
        const year = date.getFullYear();
        return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    };

    return (

        <div className='flex h-screen w-full '>
            <Sidebar />
            <div className='flex h-full w-full rounded-tl-lg bg-gradient-to-r from-blue-800 via-blue-200 to-cyan-500 flex-col  p-2  self-start  '>
                <div className='flex flex-col p-4 bg-slate-200 rounded-xl'>
                    <h6 className=''>
                        <span className="font-bold ">  DNI: </span>
                        <input
                            className='p-4 mb-4'
                            type='text'
                            placeholder='Dni'
                            value={user.dni}
                            disabled
                        />
                        <span className="font-bold ">Nombre y Apellido:</span>
                        <input
                            className='p-4 mb-4'
                            type='text'
                            placeholder='Dni'
                            value={user.nombre}
                            disabled
                        />
                        <span className="font-bold ">Legajo:</span>
                        <input
                            className='p-4 mb-4'
                            type='text'
                            placeholder='Dni'
                            value={user.dni}
                            disabled
                        />
                    </h6>
                    <select className='p-4 mb-4' onChange={handleSelectChange}>
                        <option value="">Seleccione una opción</option>
                        <option value="carpeta médica">Carpeta médica</option>
                        <option value="falta con aviso">Falta con aviso</option>
                        <option value="carp.medica x atención fliar">Carp. médica x atención familiar</option>
                        <option value="permisos autorizados">Permisos autorizados</option>
                        <option value="duelo">Duelo</option>
                    </select>
                    {(selectedOption !== '' && selectedOption !== 'falta con aviso' && selectedOption !== 'duelo') ? (
                        <input className='p-4 mb-4' type='File' placeholder='Nombre' />
                    ) : (
                        <div></div>
                    )}  <button class="bg-red-300 hover:bg-red-500  text-white font-bold self-center w-32 py-1 px-3 rounded-full  hover:shadow-2xl hover:shadow-slate-900 hover:text-white  transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                        onClick={handleSolicitarClick}
                    >
                        solicitar
                    </button>
                </div> 
                <div className="flex  flex-wrap h-full w-full justify-center overflow-y-auto gap-2 p-4">
                
                    {
                        solicitudesByDni && solicitudesByDni.length > 0 && solicitudesByDni.map(s => (
                            <div className="flex flex-col h-1/2 w-1/4 bg-slate-200 shadow-slate-900 m-4 rounded overflow-hidden shadow-2xl p-4">

                                <div className="gap-4 mb-4">
                                    <h1 className=" font-sans uppercase text-center text-xl mb-8 ">{s.categoriaSolicitud}</h1>
                                    {/* <h2 className='mt-2 mb-4' >Cantidad de Solicitudes: {s.idsolicitudes}</h2>      //solicitudes */}
                                    <p className="text-gray-700 text-center text-xl mt-8">{formatDate(s.feachaSolicitado)}</p>
                                </div>
                                <div className="mt-auto  flex justify-center items-center">
                                <span className={`bg-gray-200 font-semi-bold rounded-full p-4 text-base text-white ${s.estado === 2 ? 'bg-green-700' : s.estado === 3 ? 'bg-red-700' : 'bg-slate-500'}`}>
                                    {s.estado === 2 ? 'Aprobada' : s.estado === 3 ? 'Rechazada' : 'En proceso'}
                                </span>

                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>

    )
}


export default Form