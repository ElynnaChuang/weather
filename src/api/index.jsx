import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_WEATHER_API_BASEURL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

export default axiosInstance;
