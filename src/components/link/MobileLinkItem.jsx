import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import PlusIcon from '../../icons/PlusIcon';

import styles from './MobileLinkItem.module.css';

function MobileLinkItem({ link, onClose }) {
  let content, className;

  const { category } = useParams();
  const { id, name, subLink } = link;
  const [isActive, setIsActive] = useState(false);

  const hasSubLink = subLink.length > 0;

  const handleToggle = () => setIsActive(prevState => !prevState);

  function isSubActive() {
    let activeCount = 0;
    subLink.forEach(sub => category === sub.id && activeCount++);
    return activeCount > 0;
  }

  if (isSubActive()) className = `${styles.btn} ${styles.active}`;
  else className = styles.btn;

  if (isActive) className += ` ${styles.toggle}`;

  if (hasSubLink)
    content = (
      <button className={className} onClick={handleToggle}>
        <span>{name}</span>
        <PlusIcon />
      </button>
    );

  if (!hasSubLink)
    content = (
      <NavLink
        to={id}
        className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        onClick={onClose}
      >
        <span>{name}</span>
      </NavLink>
    );

  return (
    <>
      <li>{content}</li>
      <AnimatePresence>
        {hasSubLink && isActive && (
          <motion.ul
            variants={{
              visible: { height: 'auto', overflow: 'hidden' },
              hidden: { height: 0, overflow: 'hidden' },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {subLink.map(link => (
              <li key={link.id}>
                <NavLink
                  to={link.id}
                  className={({ isActive }) => `${styles.sub} ${isActive ? styles.active : ''}`}
                  onClick={onClose}
                >
                  <div className={styles.divider} />
                  <span>{link.name}</span>
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileLinkItem;
