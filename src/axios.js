import axios from 'axios';

const instance = axios.create({
    baseURL: 'quizbe-production.up.railway.app',
    withCredentials: true
});

export default instance;
