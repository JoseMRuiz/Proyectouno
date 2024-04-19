import React from 'react'
import Sidebar from './Sidebar'
import { User } from 'lucide-react'
import logotc from '../images/logotc.png'

const Usuario = () => {
    return (
        <div className='flex h-full w-full'>
            <Sidebar
                className='h-screen'

            />
            <div className='flex w-full bg-slate-600 p-2'>

                <div className='mr-14 border '>
                    <h1 className='w-64  text-4xl self-center '>USUARIO NRO</h1>
                    <User className='mt-10 w-64 size-32 ' />
                    <input type="file" className='mt-10' />
                </div>
                <div className='flex flex-col mr-10'>

                    <h1 className='mt-5 self-center '>nombre </h1>
                    <input type="text" className='mb-5 rounded-lg w-96 p-2 ' disabled />
                    <h1 className='mt-5 self-center '>telefono</h1>
                    <input type="text" className='mb-5 rounded-lg w-96 p-2' disabled />
                    <h1 className='mt-5  self-center'>Email</h1>
                    <input type="text" className='mb-5 rounded-lg w-96 p-2' disabled />

                </div>
                <div className='flex flex-col mr-10'>
                    <h1 className='mt-5 self-center '>apellido</h1>
                    <input type="text" className='mb-5 rounded-lg w-96 p-2' disabled />
                    <h1 className='mt-5 self-center '>telefono de emergencia </h1>
                    <input type="text" className='mb-5 rounded-lg w-96 p-2' disabled />
                    <h1 className='mt-5  self-center'>ubicacion</h1>
                    <input type="text" className='mb-5 rounded-lg w-96 p-2' disabled />

                </div>


                <img src={logotc} className='w-1/2 absolute bottom-12 end-60' />
            </div>
        </div>
    )
}

export default Usuario