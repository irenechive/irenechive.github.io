import LINK from '../../data/navigate';
import MobileLinkItem from './MobileLinkItem';

import styles from './MobileLinkList.module.css';

function MobileLinkList({ onClose }) {
  // const LINK

  return (
    <ul id={styles.list}>
      {LINK.map(link => (
        <MobileLinkItem key={link.id} link={link} onClose={onClose} />
      ))}
    </ul>
  );
}

export default MobileLinkList;
