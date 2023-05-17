import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import { CenterLayout } from '@/layouts';
import { weatherIcons } from '@/assets/weather_icons';
import { WeatherCard, WeatherItem } from '@/components';

import { getCityInfo } from '@/api/getCityInfo';
import { getTimeZone } from '@/api/getTimeZone';
import { getTime } from '@/utils/day';

const CityInfoPage = () => {
  const { lat, lon } = useParams();
  const [cityInfo, setCityInfo] = useState({});
  const [cityTime, setCityTime] = useState('');
  const { state: cityName } = useLocation();

  useEffect(() => {
    const getData = async () => {
      const data = await getCityInfo(lat, lon); // api 不穩
      setCityInfo(data);

      const tz = await getTimeZone(lat, lon);
      setCityTime(() => getTime(tz));
    };

    getData();
  }, []);

  return (
    <CenterLayout>
      <WeatherCard
        icon={weatherIcons.light.clear}
        date={cityTime}
        cityName={cityName}
        temp={22}
      />
      <section className={styles.weather_detail}>
        <div className={styles.weather_detail_top}>
          <WeatherItem title='FeelsLike' content={cityInfo.feelsLike} unit='°C' />
          <WeatherItem title='Min Temp' content={cityInfo.tempMin} unit='°C' />
          <WeatherItem title='Max Temp' content={cityInfo.tempMax} unit='°C' />
        </div>
        <WeatherItem title='Humidity' content={cityInfo.humidity} unit='%' />
        <WeatherItem title='Rainy' content={cityInfo.rainProb} unit='%' />
        <WeatherItem title='Wind Speed' content={cityInfo.windSpeed} unit='m/s' />
        <WeatherItem title='UV Index' content={cityInfo.uvIndex} />
      </section>
    </CenterLayout>
  );
};

export default CityInfoPage;
