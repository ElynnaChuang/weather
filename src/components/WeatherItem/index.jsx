import styles from './styles.module.scss';

export const WeatherItem = ({ title, content, unit, icon }) => {
  return (
    <div className={styles.items}>
      <div className={styles.title}>
        {icon && <span>{icon}</span>}
        {title}
      </div>
      <div className={styles.content}>
        {content}
        <span>{unit}</span>
      </div>
    </div>
  );
};
