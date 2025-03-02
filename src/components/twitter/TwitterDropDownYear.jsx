import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import ChevronDownIcon from '../../icons/ChevronDownIcon';

import styles from './TwitterDropDownYear.module.css';

function TwitterDropDownYear({ minYear, curTab, curYear }) {
  let className = styles.btn;
  let headParam = '';

  const years = [];

  const [isActive, setIsActive] = useState(false);

  if (curTab) headParam = `?filter=${curTab}`;

  const handleToggle = () => setIsActive(prevState => !prevState);
  const handleClose = () => setIsActive(false);

  if (isActive) className += ` ${styles.active}`;

  for (let i = minYear; i <= new Date().getFullYear(); i++) years.push(i);

  return (
    <div id={styles.dropdown}>
      <button className={className} onClick={handleToggle}>
        <span>YEAR</span>
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
                className={!curYear ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>ALL</span>
              </NavLink>
            </li>
            {years.map(year => (
              <li key={year}>
                <NavLink
                  to={`${headParam}&year=${year}`}
                  className={curYear === year ? `${styles.select} ${styles.active}` : styles.select}
                  onClick={handleClose}
                >
                  <span>{year}</span>
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TwitterDropDownYear;
