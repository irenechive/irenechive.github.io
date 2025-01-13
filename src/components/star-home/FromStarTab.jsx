import { NavLink } from 'react-router-dom';

import styles from './FromStarTab.module.css';

function FromStarTab({ curTab }) {
  return (
    <div id={styles.tab}>
      <NavLink to={'?filter=irene'} className={curTab === 'irene' ? `${styles.tab} ${styles.active}` : styles.tab}>
        IRENE
      </NavLink>
      <NavLink to={'?filter=rv'} className={curTab === 'rv' ? `${styles.tab} ${styles.active}` : styles.tab}>
        RED VELVET
      </NavLink>
    </div>
  );
}

export default FromStarTab;
