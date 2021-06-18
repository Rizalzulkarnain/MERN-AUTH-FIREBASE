import axios from 'axios';

const Http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 50000,
});

Http.interceptors.response.use(null, (ex) => {
  if (ex.response) {
    console.log(ex.response.data);
  } else {
    console.log(ex.message);
  }
  return Promise.reject(ex);
});

export default Http;
