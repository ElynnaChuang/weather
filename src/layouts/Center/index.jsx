import styles from './styles.module.scss';

export const CenterLayout = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};
