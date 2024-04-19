import React,{ useState} from 'react'
import logotc from '../images/logotc.png'
import Sidebar from './Sidebar';
const Form = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [showInput, setShowInput] = useState(false);

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        console.log(e.target.value)
    };
    return (
        
        <div className='flex  h-full w-full bg-slate-400 '>
            
            <Sidebar/>
            <div className='w-full content-center justify-center h-full '>
                
                
            </div>
            <div className='h-full w-11/12 bg-white rounded-xl p-2 ml-auto mr-8 mt-10'>
                <div className='flex flex-col p-4'>
                    
                    <input
                        className='p-4 mb-4'
                        type='text'
                        placeholder='Nombre'
                    />

                    <input
                        className='p-4 mb-4'
                        type='text'
                        placeholder='Apellido'
                    />
                    <input
                        className='p-4 mb-4'
                        type='text'
                        placeholder='Dni'
                    />

                    <select className='p-4 mb-4' onChange={handleSelectChange}>
                        <option value="">Seleccione una opción</option>
                        <option value="carpeta médica">Carpeta médica</option>
                        <option value="falta con aviso">Falta con aviso</option>
                        <option value="carp.medica x atención fliar">Carp. médica x atención familiar</option>
                        <option value="permisos autorizados">Permisos autorizados</option>
                        <option value="duelo">Duelo</option>
                    </select>

                    {(selectedOption !== '' && selectedOption !== 'falta con aviso' && selectedOption !== 'duelo') ?  (
                        <input className='p-4 mb-4' type='File' placeholder='Nombre' />
                    ) : (
                        <div></div>
                    )}
                    <button class="bg-red-300 hover:bg-red-500 text-white font-bold self-center w-32 py-1 px-3 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                        solicitar
                    </button>
                </div>

                <div className=' h-full w-full'>

                </div>
            </div>
        </div>
        
    )
}


export default Form