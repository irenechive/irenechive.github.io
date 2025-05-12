import { Link } from 'react-router-dom';

import styles from './Header.module.css';

function Header() {
  return (
    <header id={styles.header}>
      <div className={styles.content}>
        <Link to="/">Home</Link>
        <Link className={styles.courage} to="/courage">
          Courage has arrived!🐰💌
        </Link>
      </div>
    </header>
  );
}

export default Header;
