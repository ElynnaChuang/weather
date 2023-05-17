import { CenterLayout } from '@/layouts';
import styles from './styles.module.scss';
import { CitiesList } from '@/components';

const CitiesPage = () => {
  return (
    <CenterLayout>
      <h1 className={styles.title}>Home : Cities List</h1>
      <CitiesList />
    </CenterLayout>
  );
};

export default CitiesPage;
