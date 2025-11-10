import { NavLink } from 'react-router-dom';

import styles from './TwitterTab.module.css';

function TwitterTab({ curTab }) {
  return (
    <div id={styles.tab}>
      <NavLink to={'?filter=irene'} className={curTab === 'irene' ? `${styles.tab} ${styles.active}` : styles.tab}>
        IRENE
      </NavLink>
      <NavLink to={'?filter=rv'} className={curTab === 'rv' ? `${styles.tab} ${styles.active}` : styles.tab}>
        RV
      </NavLink>
      <NavLink to={'?filter=irene-seulgi'} className={curTab === 'irene-seulgi' ? `${styles.tab} ${styles.active}` : styles.tab}>
        I&S
      </NavLink>
      <NavLink to={'?filter=album'} className={curTab === 'album' ? `${styles.tab} ${styles.active}` : styles.tab}>
        Album
      </NavLink>
    </div>
  );
}

export default TwitterTab;
