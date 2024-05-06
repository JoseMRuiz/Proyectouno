import { useDispatch, useSelector } from 'react-redux';
import authApi from '../api/authApi';
import { onChecking, onLogin, onLogout } from '../store/auth/authSlice';

export const useAuth = () => {
    const { status, user, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await authApi.post('/auth/login', { email, password })
            console.log(data)
            if (data.ok === true) {
                dispatch(onLogin({ email: data.email, password: data.clave, nombre: data.nombre, apellido: data.apellido, dni: data.dni, rol: data.rol }))
                
                }
            //!TODO
            //Manejar el caso: "Usuario no encontrado"
        } catch (error) {
            setTimeout(() => {
                dispatch(onLogout('Credenciales incorrectas'));
            }, 10);
        }
    }

    const startLogout = () => {
        localStorage.clear();
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
