import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { getCityInfo } from '@/api/getCityInfo';
import { CenterLayout } from '@/layouts';
import { weatherIcons } from '@/assets/weather_icons';
import { WeatherCard, WeatherItem } from '@/components';

const CityInfoPage = () => {
  const { lat, lon } = useParams();
  const [cityInfo, setCityInfo] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await getCityInfo(lat, lon);
      setCityInfo(data);
    };

    getData();
  }, []);

  return (
    <CenterLayout>
      <WeatherCard
        icon={weatherIcons.light.clear}
        date='5/17 19:45'
        cityName='Taipei'
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
