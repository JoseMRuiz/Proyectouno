import axios from 'axios';

// const { VITE_API_URL } = getEnvVariables()
const URL = 'http://acceso.nubecenter.com.ar:11707/api'
// // const URL = 'http://acceso.nubecenter.com.ar:11710/api'

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