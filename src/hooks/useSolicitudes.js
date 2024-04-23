import authApi from "../api/authApi";
import { useDispatch, useSelector } from 'react-redux';
import { onCarga, onCargaByDni } from "../store/solicitudes/solicitudesSlice";

export const useSolicitudes = () => {
    const dispatch = useDispatch()

    const fetchSolicitudes = async () => {
        try {
            const { data } = await authApi.get('/solicitudes/solicitudes')
            dispatch(onCarga(data.data))
        } catch (error) {
            console.log(error)
        }
    }

    const fetchByDni = async (dni) => {
        try {
            const { data } = await authApi.get(`/solicitudes/solicitudes/${dni}`)
            dispatch(onCargaByDni(data.data))
        } catch (error) {
            console.log(error)
        }
    }

    return {
        fetchSolicitudes,
        fetchByDni
    }
}
