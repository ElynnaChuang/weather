import axiosInstance from './index.jsx';

export const getCityInfo = async (lat, lon) => {
  const {
    data: { status, data },
  } = await axiosInstance.get(`/${lat}/${lon}`);

  if (status === 'success') {
    return data;
  }
  return {};
};
