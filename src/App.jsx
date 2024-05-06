import './App.css'
import Loginn from './components/Login'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Pantalla_postLogin from './components/Pantalla_postLogin'
import Form from './components/Form'
import VistaDatos from './components/VistaDatos'
import Usuario from './components/Usuario'
import { store } from './store/store'
import { useAuth } from './hooks/useAuth'
import Registro from './components/Registro'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    if(localStorage.getItem('email') && localStorage.getItem('email').length > 0 ){
      console.log('Existe')
    } else {
      
      console.log(localStorage.getItem('email'))
    }
  },[localStorage.getItem('email')] )
  return (
    <div className='h-screen w-full'>
      <BrowserRouter>
        <Routes>
          {
            (localStorage.getItem('email') === null || localStorage.getItem('email').length === 0 )

              ? (
                <>
                  <Route path="/login" element={<Loginn />} />
                  <Route path="/*" element={<Navigate to="/login" />} />

                </>
              )

              : (
                <>
                  <Route path='/Home' element={<Pantalla_postLogin />} />

                  <Route path="/*" element={<Navigate to="/Home" />} />
                  <Route path='Form' element={<Form />} />
                  <Route path='VistaDatos' element={<VistaDatos />} />
                  <Route path='Usuario' element={<Usuario />} />
                  <Route path='Registro' element={<Registro />} />
                </>
              )
          }

        </Routes>
      </BrowserRouter>
    </div >

  )

}

export default App