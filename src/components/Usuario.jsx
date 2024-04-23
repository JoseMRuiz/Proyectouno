import React from 'react'
import Sidebar from './Sidebar'
import { User } from 'lucide-react'
import logotc from '../images/logotc.png'
import { useSelector } from 'react-redux'

const Usuario = () => {
    const { user } = useSelector(state => state.auth)

    return (
        <div className='flex h-full w-full'>
            <Sidebar
                className='h-screen'

            />
            <div className='flex rounded-tl-lg w-full bg-slate-400 p-2 gap-4 '>

                <div className='border gap-4 flex flex-col p-4 items-center'>

                    <h1 className='text-4xl bg-slate-300 rounded-lg p-4'>{user.dni}</h1>
                    <User className='size-32 bg-slate-200 border rounded-full p-2' />

                </div>
                <div className='flex flex-col mr-10'>

                    <h1 className='mt-5 self-center '>NOMBRE </h1>
                    <input type="text" value={user.nombre} className='mb-5 rounded-lg w-96 p-2 ' disabled />
                    <h1 className='mt-5 self-center '>TELEFONO</h1>
                    <input type="text" className='mb-5 rounded-lg w-96 p-2' disabled />
                    <h1 className='mt-5  self-center'>EMAIL</h1>
                    <input type="text" value={user.email} className='mb-5 rounded-lg w-96 p-2' disabled />

                </div>
                <div className='flex flex-col mr-10'>
                    <h1 className='mt-5 self-center '>APELLIDO</h1>
                    <input type="text" value={user.apellido} className='mb-5 rounded-lg w-96 p-2' disabled />
                    <h1 className='mt-5 self-center '>TELEFONO DE EMERGENCIO</h1>
                    <input type="text" className='mb-5 rounded-lg w-96 p-2' disabled />
                    <h1 className='mt-5  self-center'>UBICACION</h1>
                    <input type="text" className='mb-5 rounded-lg w-96 p-2' disabled />

                </div>


                <img src={logotc} className='w-1/2 absolute bottom-12 end-32' />
            </div>
        </div>
    )
}

export default Usuario