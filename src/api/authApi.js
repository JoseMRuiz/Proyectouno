import axios from 'axios';

// const { VITE_API_URL } = getEnvVariables()
// const URL = 'https://padron-deudores-backend.onrender.com/api'
const URL = 'http://localhost:4000/api'

const authApi = axios.create({
    baseURL: URL
});

// Todo: configurar interceptores
authApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})


export default authApi;