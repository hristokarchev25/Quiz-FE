import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://quizbe-production.up.railway.app',
    withCredentials: true
});

export default instance;
