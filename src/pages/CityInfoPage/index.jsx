import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { getCityInfo } from '@/api/getCityInfo';
import { CenterLayout } from '@/layouts';
import { weatherIcons } from '@/assets/weather_icons';
import { WeatherCard } from '@/components';

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
        <div className={styles.top_area}>
          <div>feelsLike : {cityInfo.feelsLike}</div>
          <div>min : {cityInfo.tempMin}</div>
          <div>max : {cityInfo.tempMax}</div>
        </div>

        <div className={styles.bottom_area}>
          <div>humidity : {cityInfo.humidity}</div>
          <div>rainProb : {cityInfo.rainProb}</div>
          <div>windSpeed : {cityInfo.windSpeed}</div>
          <div>uvIndex : {cityInfo.uvIndex}</div>
        </div>
      </section>
    </CenterLayout>
  );
};

export default CityInfoPage;
