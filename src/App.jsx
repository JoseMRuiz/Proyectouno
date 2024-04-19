import { useState } from 'react'
import { TextField } from '@mui/material'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard1 from './components/Dashboard1'
import Loginn from './components/Login'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Pantalla_postLogin from './components/Pantalla_postLogin'
import Form from './components/Form'
import VistaDatos from './components/VistaDatos'
import Usuario from './components/Usuario'




function App() {


return (
    <div className='flex h-full w-full'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Pantalla_postLogin/>}/>
            <Route path='Loginn' element={<Loginn/>}/>
            <Route path='Pantalla_postLogin' element={<Pantalla_postLogin/>}/>
            <Route path='Form' element={<Form/>}/>
            <Route path='VistaDatos' element={<VistaDatos/>}/>
            <Route path='Usuario' element={<Usuario/>}/>
          </Routes>
        </BrowserRouter>
    </div>
        
)
}

export default App