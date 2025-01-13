import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import ChevronDownIcon from '../../icons/ChevronDownIcon';

import styles from './InstagramDropDown.module.css';

function InstagramDropDown({ curMember }) {
  let className = styles.btn;

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => setIsActive(prevState => !prevState);
  const handleClose = () => setIsActive(false);

  if (isActive) className += ` ${styles.active}`;

  return (
    <div id={styles.dropdown}>
      <button className={className} onClick={handleToggle}>
        <span>MEMBER</span>
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
                to={'?filter=rv'}
                className={!curMember ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>ALL</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'?filter=rv&member=SEULGI'}
                className={curMember === 'SEULGI' ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>SEULGI</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'?filter=rv&member=WENDY'}
                className={curMember === 'WENDY' ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>WENDY</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'?filter=rv&member=JOY'}
                className={curMember === 'JOY' ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>JOY</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'?filter=rv&member=YERI'}
                className={curMember === 'YERI' ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>YERI</span>
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default InstagramDropDown;
