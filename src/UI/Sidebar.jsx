import { motion } from 'framer-motion';

import MobileLinkList from '../components/link/MobileLinkList';

import styles from './Sidebar.module.css';

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
