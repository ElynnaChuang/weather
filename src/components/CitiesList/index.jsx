import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import cities from '@/data/cities.json';

export const CitiesList = () => {
  return (
    <ul className={styles.list}>
      {cities.map(({ city, latitude, longitude }) => (
        <li key={city}>
          <Link to={`/${latitude}/${longitude}`}>{city}</Link>
        </li>
      ))}
    </ul>
  );
};
