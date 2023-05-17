import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import cities from '@/data/cities.json';

export const CitiesList = () => {
  return (
    <ul className={styles.list}>
      {cities.map(({ city, latitude, longitude }) => (
        <Link to={`/${latitude}/${longitude}`} state={city} key={city}>
          <li className={styles.list_item}>{city}</li>
        </Link>
      ))}
    </ul>
  );
};
