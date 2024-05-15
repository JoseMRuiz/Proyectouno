import authApi from "../api/authApi";
import { useDispatch, useSelector } from 'react-redux';
import { onCarga, onCargaByDni } from "../store/solicitudes/solicitudesSlice";
import Swal from "sweetalert2";

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

    const postFaltaConAviso = async ({ dni, categoriaSolicitud, empleado, dia, mes, anio }) => {
        try {
            console.log('------Falta con aviso------')
            const { data } = await authApi.post(`/solicitudes/falta-con-aviso/${dni}`, {
                dni, categoriaSolicitud, empleado, dia, mes, anio
            })
            console.log(data)
            if (data.ok === true) {
                Swal.fire({
                    title: "Realizado correctamente",
                    text: data.msg,
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: data.msg,
                    icon: "error"
                });
            }
        } catch (error) {
            console.log(error)
        }

    }


    return {
        fetchSolicitudes,
        fetchByDni,
        postFaltaConAviso
    }
}
