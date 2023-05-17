import styles from './styles.module.scss';

export const WeatherItem = ({ title, content, unit }) => {
  return (
    <div className={styles.items}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        {content}
        <span>{unit}</span>
      </div>
    </div>
  );
};
