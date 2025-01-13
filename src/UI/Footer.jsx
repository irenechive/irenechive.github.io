import styles from './Footer.module.css';

function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.content}>
        <div className={styles['col--1']}>
          <div className={styles.divider} />
          <p>queen of everything</p>
        </div>
        <div className={styles['col--2']}>IRENE</div>
      </div>
    </footer>
  );
}

export default Footer;
