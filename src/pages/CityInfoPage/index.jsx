import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import { CenterLayout } from '@/layouts';
import { WeatherCard, WeatherItem } from '@/components';

import { getCityInfo } from '@/api/getCityInfo';
import { getTimeZone } from '@/api/getTimeZone';
import { getTime } from '@/utils/day';
import { getWeatherIcon } from '@/utils/getWeatherIcon';

const CityInfoPage = () => {
  const { lat, lon } = useParams();
  const { state: cityName } = useLocation();

  const [cityTime, setCityTime] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [mainInfo, setMainInfo] = useState({ mainWeather: {}, temp: {} });
  const [tempDetail, setTempDetail] = useState([]);
  const [othersDetail, setOthersDetail] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const {
        finalObj: { mainWeather, temp },
        tempInfo,
        otherInfo,
      } = await getCityInfo(lat, lon);

      setMainInfo({ mainWeather, temp });
      setTempDetail(tempInfo);
      setOthersDetail(otherInfo);

      const tz = await getTimeZone(lat, lon); // api 不穩
      setCityTime(() => getTime(tz));
    };

    getData();
  }, []);

  useEffect(() => {
    if (!mainInfo || !cityTime) return;

    const hour = cityTime.split(' ')[1].split(':')[0];
    setWeatherIcon(() => getWeatherIcon(mainInfo.mainWeather.value, hour));
  }, [cityTime]);

  return (
    <CenterLayout>
      <WeatherCard
        icon={weatherIcon}
        date={cityTime}
        cityName={cityName}
        temp={mainInfo.temp.value}
      />
      <section className={styles.weather_detail}>
        <div className={styles.weather_detail_top}>
          {tempDetail.map(({ id, title, value, unit }) => (
            <WeatherItem key={id} title={title} content={value} unit={unit} />
          ))}
        </div>
        {othersDetail.map(({ id, title, value, unit }) => (
          <WeatherItem key={id} title={title} content={value} unit={unit} />
        ))}
      </section>
    </CenterLayout>
  );
};

export default CityInfoPage;
