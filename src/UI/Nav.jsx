import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Sidebar from './Sidebar';

import LinkList from '../components/link/LinkList';
import Logo from '../components/Logo';

import MenuIcon from '../icons/MenuIcon';

import styles from './Nav.module.css';

function Nav() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => setIsActive(prevState => !prevState);
  const handleClose = () => setIsActive(false);

  return (
    <>
      <nav id={styles.nav}>
        <div className={styles.content}>
          <LinkList />
          <button className={styles.btn} onClick={handleToggle}>
            <MenuIcon />
          </button>
        </div>
      </nav>
      <AnimatePresence>{isActive && <Sidebar onClose={handleClose} />}</AnimatePresence>
    </>
  );
}

export default Nav;
