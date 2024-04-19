import React,{ useState} from 'react'
import logotc from '../images/logotc.png'
import Sidebar from './Sidebar';
const Form = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [showInput, setShowInput] = useState(false);

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        console.log(e.target.value)
    }
    const [cardCount, setCardCount] = useState(0);

    const handleSolicitarClick = () => {
        setCardCount(prevCount => prevCount + 1);
    };
    const isSolicitudAceptada = true; 
    return (
        
        <div className='flex h-screen  w-full bg-slate-400 '>
            <Sidebar />
            <div className= 'flex flex-col h-full w-4/6 ml-32 p-2 mr-10 rounded-xl  self-start  '>
                <div className='flex flex-col p-4 bg-white rounded-xl'>
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
                    )}  <button class="bg-red-300 hover:bg-red-500 text-white font-bold self-center w-32 py-1 px-3 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                                onClick={handleSolicitarClick}
                    >
                        solicitar
                    </button>  
                    </div>
                    <div className="flex flex-wrap justify-center overflow-y-auto">
    {Array.from({ length: cardCount }).map((_, index) => (
        <div key={index} className="max-w-sm rounded overflow-y-auto shadow-lg mx-2 my-2">
        <div className="mt-8">
            <div className="flex flex-wrap justify-center">
                <div className="max-w-sm rounded overflow-y-auto shadow-lg mx-2 my-2">
                    <h1 className='ml-10'>hola aca va la info del card</h1>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">solicitud nro</div>
                        <p className="text-gray-700 text-base">
                            pequeña descripcion de la solicitud
                        </p>
                        <h1 className={`bg-slate-50 ${isSolicitudAceptada ? 'hover:bg-green-600' : 'hover:bg-red-600'}`}>
                            Estado de la solicitud
                        </h1>


                        
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    ))}
</div>

    </div>
</div>
        
    )
}


export default Form