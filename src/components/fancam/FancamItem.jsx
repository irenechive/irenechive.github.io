import { Link } from 'react-router-dom';

import { formatDate } from '../../util/helper';

import styles from './FancamItem.module.css';

function FancamItem({ fancam }) {
  return (
    <li>
      <Link to={`${fancam.id}`} className={styles.thumb}>
        <span className={styles.type}>{fancam.type}</span>
        <img src={fancam.thumbnail} />
      </Link>
      <h2 className={styles.title}>
        <Link to={`${fancam.id}`}>{fancam.title}</Link>
      </h2>
      <time className={styles.date}>{formatDate(fancam.created_at)}</time>
    </li>
  );
}

export default FancamItem;
