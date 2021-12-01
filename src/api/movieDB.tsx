import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '14995d58ee13aea8eb9b1c53ef60dca6',
        language: 'es-ES'
    }
});

export default movieDB;


