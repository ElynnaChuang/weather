import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3333/weather/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

export default axiosInstance;
