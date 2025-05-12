import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import ERA from '../../data/era';

import ChevronDownIcon from '../../icons/ChevronDownIcon';

import styles from './TwitterDropDownEra.module.css';

function TwitterDropDownEra({ curTab, curEra }) {
  let className = styles.btn;
  let headParam = '';

  const [isActive, setIsActive] = useState(false);

  if (curTab) headParam = `?filter=${curTab}`;

  const handleToggle = () => setIsActive(prevState => !prevState);
  const handleClose = () => setIsActive(false);

  if (isActive) className += ` ${styles.active}`;

  return (
    <div id={styles.dropdown}>
      <button className={className} onClick={handleToggle}>
        <span>ERA</span>
        <ChevronDownIcon />
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.ul
            className={styles.list}
            variants={{
              visible: { height: 'auto', overflow: 'hidden' },
              hidden: { height: 0, overflow: 'hidden' },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <li>
              <NavLink
                to={headParam}
                className={!curEra ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>ALL</span>
              </NavLink>
            </li>
            {curTab !== 'album' && (
              <li>
                <NavLink
                  to={`${headParam}&era=none`}
                  className={curEra === 'none' ? `${styles.select} ${styles.active}` : styles.select}
                  onClick={handleClose}
                >
                  (None)
                </NavLink>
              </li>
            )}
            {ERA.map(era => (
              <li key={era.id}>
                <NavLink
                  to={`${headParam}&era=${era.param}`}
                  className={curEra === era.param ? `${styles.select} ${styles.active}` : styles.select}
                  onClick={handleClose}
                >
                  <span>{era.name}</span>
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TwitterDropDownEra;
