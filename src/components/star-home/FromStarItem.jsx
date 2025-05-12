import { Link } from 'react-router-dom';

import { formatDate } from '../../util/helper';

import styles from './FromStarItem.module.css';

function FromStarItem({ item }) {
  return (
    <li id={styles.item}>
      <Link className={styles.title} to={`${item.id}`}>
        <h2>{item.title}</h2>
        <time className={styles.date}>{formatDate(item.created_at)}</time>
      </Link>
    </li>
  );
}

export default FromStarItem;
