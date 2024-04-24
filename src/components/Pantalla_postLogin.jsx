import React from 'react'
import Sidebar from './Sidebar'
import Inicio from './Inicio'

const Pantalla_postLogin = () => {
    return (
        <div className='flex h-full w-full'>
            <Sidebar />
            <Inicio/>
        </div>
    )
}

export default Pantalla_postLogin
