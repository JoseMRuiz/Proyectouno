import { useDispatch, useSelector } from 'react-redux';
import authApi from '../api/authApi';
import { onChecking, onLogin, onLogout } from '../store/auth/authSlice';
import { SiWalkman } from 'react-icons/si';

export const useAuth = () => {
    const { status, user, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await authApi.post('/auth/login', { email, password })
           
            if (data.ok === true) {
                console.log('ok = true')
                dispatch(onLogin({ email: data.email, password: data.clave, nombre: data.nombre, apellido: data.apellido, dni: data.dni, rol: data.rol }))
                } 
            //!TODO
            //Manejar el caso: "Usuario no encontrado"
        } catch (error) {
            console.log(error)
            alert("Error en credenciales");
            setTimeout(() => {
                dispatch(onLogout('Credenciales incorrectas'));
            }, 10);
        }
    }

    const startLogout = () => {
        dispatch(onLogout())
    }

    return {
        //* Propiedades
        status,
        //* Metodos
        startLogin,
        startLogout
    }
}
