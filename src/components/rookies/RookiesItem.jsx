import { Link } from 'react-router-dom';

import { formatDate } from '../../util/helper';

import styles from './RookiesItem.module.css';

function RookiesItem({ rookie }) {
  const { id, thumbnail, created_at, content } = rookie;
  const [{ title }] = content;

  return (
    <li className={styles.rookie}>
      <Link className={styles.thumb} to={`${id}`}>
        <img src={thumbnail} />
      </Link>
      <h2>
        <Link className={styles.title} to={`${id}`}>
          {title}
        </Link>
      </h2>
      <time className={styles.date}>{formatDate(created_at)}</time>
    </li>
  );
}

export default RookiesItem;
