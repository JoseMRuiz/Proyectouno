import React from 'react'
import Sidebar from './Sidebar'

const Solicitudes = () => {
    return (
        <>
        <div className='flex h-full w-full'>
            <Sidebar/>
            
            <div className='flex h-full w-full m-auto bg-gradient-to-r from-blue-800 via-blue-200 to-cyan-500'>
                <div className='flex flex-col justify-center items-center  m-auto'>
                <h1 className=' font-bold' >Datos solicidatos durante el año 2024</h1>
                    <table>
                        <thead>
                            <tr >
                                <th scope='col' className=' mr-3 p-4 font-personalizada  uppercase   border-4 border-double border-black '>nombre </th>
                                <th scope='col' className=' mr-3 p-4 font-personalizada  uppercase  border-4 border-double border-black'>tipo de solicitud </th>
                                <th scope='col' className=' mr-3 p-4 font-personalizada  uppercase   border-4 border-double border-black'> fecha solicitada </th>
                                <th scope='col' className=' mr-3 p-4 font-personalizada  uppercase   border-4 border-double border-black '> dias restantes </th>
                            </tr>
                        </thead>

                        {/* aca se crean las lineas con los datos */}
                        <tbody >
                            <tr className=' justify-between '>
                                <th scope='row' className=' p-1 border-4 font-personalizada2 border-gray-900 text-slate-800'> jose </th>
                                <td className=' p-1 border-4 font-personalizada2  border-gray-900'>falta con aviso</td> 
                                <td className=' p-1 border-4 font-personalizada2 text-center border-gray-900'>13/06</td>
                                <td className=' p-1 border-4 font-personalizada2 text-center border-gray-900'>2 dias</td>
                            </tr>
                        </tbody>
                        <tbody >
                        <tr className=' justify-between '>
                                <th scope='row' className=' p-1 border-4 border-gray-900'> jose </th>
                                <td className=' p-1 border-4 border-gray-900'>falta con aviso</td> 
                                <td className=' p-1 border-4 border-gray-900'>13/06</td>
                                <td className=' p-1 border-4 border-gray-900'>2 dias</td>
                            </tr>
                        </tbody>
                        <tbody >
                        <tr className=' justify-between '>
                                <th scope='row' className=' p-1 border-4 border-gray-900'> jose </th>
                                <td className=' p-1 border-4 border-gray-900'>falta con aviso</td> 
                                <td className=' p-1 border-4 border-gray-900'>13/06</td>
                                <td className=' p-1 border-4 border-gray-900'>2 dias</td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
                
            </div>
            
        </div>
        
        
        
        
        
        </>
    )
}

export default Solicitudes