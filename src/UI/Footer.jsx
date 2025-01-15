import styles from './Footer.module.css';

function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.content}>
        <div className={styles['col--1']}>
          <div className={styles.divider} />
          <a href="https://x.com/ovxbjh" target="_blank">
            ⓒ {new Date().getFullYear()} <strong>ov.</strong> All rights reserved
          </a>
        </div>
        <div className={styles['col--2']}>
          for <strong>IRENE</strong>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
