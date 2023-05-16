import styles from './styles.module.scss';
import { CitiesList } from '@/components';

const CitiesPage = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Home : Cities List</h1>
      <CitiesList />
    </section>
  );
};

export default CitiesPage;
