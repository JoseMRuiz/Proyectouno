import './App.css'
import Loginn from './components/Login'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Pantalla_postLogin from './components/Pantalla_postLogin'
import Form from './components/Form'
import VistaDatos from './components/VistaDatos'
import Usuario from './components/Usuario'
import { store } from './store/store'
import { useAuth } from './hooks/useAuth'

function App() {
  const { status } = useAuth();
  // const authStatus = 'not-authenticated' // "authenticated" // "checking" 
  return (
    <div className='h-screen w-full'>
      <BrowserRouter>
        <Routes>
          {
            (status === 'not-authenticated' || status === 'checking')

              ? (
                <>
                  <Route path="/login" element={<Loginn />} />
                  <Route path="/*" element={<Navigate to="/login" />} />

                </>
              )

              : (
                <>
                  <Route path='/Pantalla_postLogin' element={<Pantalla_postLogin />} />

                  <Route path="/*" element={<Navigate to="/Pantalla_postLogin" />} />
                </>
              )
          }

        </Routes>
        {/* <Routes>
            <Route path="/" element={<Pantalla_postLogin />} />
            <Route path='Loginn' element={<Loginn />} />
            <Route path='Pantalla_postLogin' element={<Pantalla_postLogin />} />
            <Route path='Form' element={<Form />} />
            <Route path='VistaDatos' element={<VistaDatos />} />
            <Route path='Usuario' element={<Usuario />} />
          </Routes> */}
      </BrowserRouter>
    </div >

  )

}

export default App