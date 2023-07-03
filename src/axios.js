import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://slate-gray-butterfly-cuff.cyclic.app/',
    withCredentials: true
});

export default instance;
