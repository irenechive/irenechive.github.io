import { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './LinkItem.module.css';

function LinkItem({ link }) {
  let content, className;

  const { category } = useParams();
  const [isActive, setIsActive] = useState(false);

  const subLink = link.subLink;
  const hasSubLink = subLink.length > 0;

  const handleToggle = () => setIsActive(prevState => !prevState);
  const handleClose = () => setIsActive(false);

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
        <span>{link.name}</span>
      </button>
    );

  if (!hasSubLink)
    content = (
      <NavLink
        to={link.id}
        className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        onClick={handleClose}
      >
        <span>{link.name}</span>
      </NavLink>
    );

  return (
    <>
      <li className={styles.item}>
        {content}
        <AnimatePresence>
          {hasSubLink && isActive && (
            <motion.ul
              className={styles['sub-list']}
              variants={{
                visible: { height: 'auto', overflow: 'hidden' },
                hidden: { height: 0, overflow: 'hidden' },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {subLink.map(sub => (
                <li key={sub.id}>
                  <Link to={sub.id} className={styles.sub} onClick={handleClose}>
                    <span>{sub.name}</span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    </>
  );
}

export default LinkItem;
