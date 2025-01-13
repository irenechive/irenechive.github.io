import { NavLink } from 'react-router-dom';

import styles from './InstagramTab.module.css';

function InstagramTab({ curTab }) {
  return (
    <div id={styles.tab}>
      <NavLink to={'?filter=irene'} className={curTab === 'irene' ? `${styles.tab} ${styles.active}` : styles.tab}>
        IRENE
      </NavLink>
      <NavLink to={'?filter=rv'} className={curTab === 'rv' ? `${styles.tab} ${styles.active}` : styles.tab}>
        RV
      </NavLink>
    </div>
  );
}

export default InstagramTab;
