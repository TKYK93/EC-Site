import axios from 'axios';

const instance = axios.create(
    {baseURL : '...'}  //API (could function) URL
);

export default instance;