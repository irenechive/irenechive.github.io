import { motion } from 'framer-motion';

import styles from './Sidebar.module.css';
import MobileLinkList from '../components/link/MobileLinkList';
import SpinSpin from '../icons/SpinSpin';
import XIcon from './XIcon';

function Sidebar({ onClose }) {
  return (
    <aside id={styles.sb}>
      <motion.div
        className={styles.content}
        variants={{
          visible: {
            opacity: 1,
            transform: 'translateX(0)',
          },
          hidden: {
            opacity: 0,
            transform: 'translateX(-105%)',
          },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <nav>
          <MobileLinkList onClose={onClose} />
        </nav>
        <div className={styles.contact}>
          <div className={styles.divider} />
          <div className={styles.info}>
            <h4>contact</h4>
            <div className={styles.icons}>
              <a href="https://spinspin.net/ovxbjh" target="_blank">
                <SpinSpin />
              </a>
              <span>or</span>
              <a href="https://x.com/ovxbjh" target="_blank">
                <XIcon />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className={styles.backdrop}
        variants={{
          visible: {
            opacity: 1,
          },
          hidden: {
            opacity: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      />
    </aside>
  );
}

export default Sidebar;
