import styles from './styles.module.scss';

export const CenterLayout = ({ children }) => {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <div className={styles.container}>{children}</div>
      </section>
    </div>
  );
};
