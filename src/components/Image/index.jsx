import styles from './styles.module.scss';

export const Image = ({ images }) => {
  const { s1x, s2x, s3x, m1x, m2x, l1x, l2x, base } = images;
  return (
    <div className={styles.img_container}>
      <picture>
        {(s1x || s2x || s3x) && (
          <source
            media='(max-width: 575px)'
            srcSet={`${s1x} 1x, ${s2x} 2x, ${s3x} 3x`}
            type='image/webp'
          />
        )}

        {(m1x || m2x) && (
          <source
            media='(max-width: 991px)'
            srcSet={`${m1x} 1x, ${m2x} 2x`}
            type='image/webp'
          />
        )}

        {(l1x || l2x) && (
          <source
            media='(min-width: 992px)'
            srcSet={`${l1x} 1x, ${l2x} 2x`}
            type='image/webp'
          />
        )}

        <img src={base} alt='...' className={styles.img} />
      </picture>
    </div>
  );
};
