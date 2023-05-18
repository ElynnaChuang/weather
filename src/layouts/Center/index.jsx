import styles from './styles.module.scss';

import { ReactComponent as BackgroundImage } from '@/assets/bg.svg';

export const CenterLayout = ({ children }) => {
  return (
    <div className={styles.page}>
      <BackgroundImage />
      <section className={styles.section}>
        <div className={styles.container}>{children}</div>
      </section>
    </div>
  );
};
