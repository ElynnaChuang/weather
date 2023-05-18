import axios from 'axios';

const TZAPI_KEY = import.meta.env.VITE_TZAPI_KEY;

const axiosInstance = axios.create({
  baseURL: 'https://api.timezonedb.com/v2.1',
  timeout: 20000,
});

export const getTimeZone = async (lat, lon) => {
  const {
    data: { status, zoneName },
  } = await axiosInstance.get(
    `/get-time-zone?key=${TZAPI_KEY}&format=json&fields=zoneName&by=position&lat=${lat}&lng=${lon}`,
  );

  if (status === 'OK') {
    return zoneName;
  }
  return '';
};
