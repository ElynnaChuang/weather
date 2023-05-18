import axiosInstance from './index.jsx';

const cityInfo = {
  mainWeather: { id: 1, value: 'clear', unit: '' },
  temp: { id: 2, value: 25, unit: '°C' },
  feelsLike: { id: 3, title: 'Feels Like', value: 25, unit: '°C' },
  tempMax: { id: 4, title: 'Max Temp', value: 30, unit: '°C' },
  tempMin: { id: 5, title: 'Min Temp', value: 20, unit: '°C' },
  humidity: { id: 6, title: 'Humidity', value: 20, unit: '%' },
  rainProb: { id: 7, title: 'Rainy', value: 50, unit: '%' },
  windSpeed: { id: 8, title: 'Wind Speed', value: 0.5, unit: 'm/s' },
  uvIndex: { id: 9, title: 'UV Index', value: 1, unit: '' },
};

const TEMP_INFO_MIN_ID = 3;
const OTHER_INFO_MIN_ID = 6;

function getRenderData(newData, defaultData) {
  const finalObj = defaultData;

  Object.entries(newData).map(([key, value]) => {
    finalObj[key] = { ...finalObj[key], value };
    return { ...finalObj[key], value };
  });

  const arr = Object.keys(finalObj).map(key => ({ ...finalObj[key], key }));
  const tempInfo = arr.filter(
    ({ id }) => id >= TEMP_INFO_MIN_ID && id < OTHER_INFO_MIN_ID,
  );
  const otherInfo = arr.filter(({ id }) => id >= OTHER_INFO_MIN_ID);

  return { finalObj, tempInfo, otherInfo };
}

export const getCityInfo = async (lat, lon) => {
  const {
    data: { status, data },
  } = await axiosInstance.get(`/${lat}/${lon}`);

  return status === 'success'
    ? getRenderData(data, cityInfo)
    : getRenderData({}, cityInfo);
};
