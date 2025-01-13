import LINKS from '../../data/navigate';
import LinkItem from './LinkItem';

import styles from './LinkList.module.css';

function LinkList() {
  return (
    <ul className={styles.list}>
      {LINKS.map(link => (
        <LinkItem key={link.id} link={link} />
      ))}
    </ul>
  );
}

export default LinkList;
