import axios from 'axios';

const instance = axios.create(
    {baseURL : 'http://localhost:5001/test-ecsite/us-central1/api'}  //API (Firebase Could Function) URL
);

export default instance;