import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import ChevronDownIcon from '../../icons/ChevronDownIcon';

import styles from './InstagramDropDownYear.module.css';

function InstagramDropDownYear({ curTab, curMember, curYear }) {
  let className = styles.btn;
  let headParam = '';

  const [isActive, setIsActive] = useState(false);

  if (curTab) headParam = `?filter=${curTab}`;
  if (curTab === 'rv' && curMember) headParam = `?filter=rv&member=${curMember}`;

  const handleToggle = () => setIsActive(prevState => !prevState);
  const handleClose = () => setIsActive(false);

  if (isActive) className += ` ${styles.active}`;

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
            <li>
              <NavLink
                to={`${headParam}&year=2015`}
                className={curYear === 2015 ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>2015</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${headParam}&year=2016`}
                className={curYear === 2016 ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>2016</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${headParam}&year=2017`}
                className={curYear === 2017 ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>2017</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${headParam}&year=2018`}
                className={curYear === 2018 ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>2018</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${headParam}&year=2019`}
                className={curYear === 2019 ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>2019</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${headParam}&year=2020`}
                className={curYear === 2020 ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>2020</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${headParam}&year=2021`}
                className={curYear === 2021 ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>2021</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${headParam}&year=2022`}
                className={curYear === 2022 ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>2022</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${headParam}&year=2023`}
                className={curYear === 2023 ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>2023</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${headParam}&year=2024`}
                className={curYear === 2024 ? `${styles.select} ${styles.active}` : styles.select}
                onClick={handleClose}
              >
                <span>2024</span>
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default InstagramDropDownYear;
