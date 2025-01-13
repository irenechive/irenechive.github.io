import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

function Logo() {
  return (
    <Link id={styles.logo} to="/">
      <span className={styles['col--1']}>IRENE</span>
      <span className={styles['col--2']}>chive</span>
    </Link>
  );
}

export default Logo;
