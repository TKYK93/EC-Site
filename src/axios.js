import axios from 'axios';

const instance = axios.create(
<<<<<<< HEAD
    {baseURL : 'http://localhost:5001/test-ecsite/us-central1/api'}  //API (Firebase Could Function) URL
=======
    {baseURL : 'http://localhost:5001/test-ecsite/us-central1/api'}  //API (cloud function) URL
>>>>>>> 659be02ce8ee7a8857ba616209ee16576e6bf9ac
);

export default instance;