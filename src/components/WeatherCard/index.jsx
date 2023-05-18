import styles from './styles.module.scss';

export const WeatherCard = ({ icon, date, cityName, temp, unit }) => {
  return (
    <section className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.info}>
        <div className={styles.info_city}>
          <p>{date}</p>
          <p>{cityName}</p>
        </div>
        <div className={styles.info_temp}>
          {temp}
          <span>{unit}</span>
        </div>
      </div>
    </section>
  );
};
