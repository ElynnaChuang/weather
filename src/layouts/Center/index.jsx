import { Image } from '@/components';
import styles from './styles.module.scss';
import { images } from '@/assets/bg';

export const CenterLayout = ({ children }) => {
  return (
    <div className={styles.page}>
      <Image images={images} />
      <section className={styles.section}>
        <div className={styles.container}>{children}</div>
      </section>
    </div>
  );
};
