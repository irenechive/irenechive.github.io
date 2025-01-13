import { Link } from 'react-router-dom';

import { formatDate } from '../../util/helper';

import styles from './ContentItem.module.css';

function ContentItem({ content }) {
  return (
    <li className={styles.content}>
      <Link to={`${content.id}`} className={styles.thumb}>
        <img src={content.thumbnail} />
      </Link>
      <h2 className={styles.title}>
        <Link to={`${content.id}`}>{content.title}</Link>
      </h2>
      <time className={styles.date}>{formatDate(content.created_at)}</time>
    </li>
  );
}

export default ContentItem;
