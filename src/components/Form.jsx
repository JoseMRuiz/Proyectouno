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

        <div className='flex h-screen  w-full '>
            <Sidebar />
            <div className='flex rounded-tl-lg bg-gradient-to-r from-blue-800 via-blue-200 to-cyan-500 flex-col h-full w-4/6 p-2  self-start w-full '>
                <div className='flex flex-col p-4 bg-slate-200 rounded-xl'>
                    <input
                        className='p-4 mb-4'
                        type='text'
                        placeholder='Dni'
                        value={user.dni}
                        disabled
                    />
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
                    )}  <button class="bg-red-300 hover:bg-red-500 text-white font-bold self-center w-32 py-1 px-3 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                        onClick={handleSolicitarClick}
                    >
                        solicitar
                    </button>
                </div>
                <div className="flex flex-wrap justify-center overflow-y-auto gap-4 p-2">
                    {
                        solicitudesByDni && solicitudesByDni.length > 0 && solicitudesByDni.map(s => (
                            <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">

                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{s.categoriaSolicitud}</div>
                                    <p className="text-gray-700 text-base">{formatDate(s.feachaSolicitado)}</p>
                                </div>
                                <div className="px-6 py-4">
                                    <span className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 bg-slate-50 ${s.estado === 1 ? 'bg-green-300' : s.estado === 2 ? 'bg-red-600' : 'bg-slate-400'}`}>Estado de la solicitud</span>
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