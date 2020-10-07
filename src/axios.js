import axios from 'axios';

const instance = axios.create(
    {baseURL : 'http://localhost:5001/test-ecsite/us-central1/api'}  //API (could function) URL
);

export default instance;