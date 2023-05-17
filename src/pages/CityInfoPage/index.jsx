import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { getCityInfo } from '@/api/getCityInfo';

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
    <section className={styles.section}>
      <h1 className={styles.title}>City Info</h1>
      <section>
        <img src='' alt='icon' />
        <p>City name</p>
        <h1>Temp : {cityInfo.temperature}</h1>
      </section>
      <section>
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
    </section>
  );
};

export default CityInfoPage;
