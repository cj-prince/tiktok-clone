import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktok-backend2021.herokuapp.com/",
});



export default instance;
