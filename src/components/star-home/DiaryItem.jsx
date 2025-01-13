import { Link } from 'react-router-dom';

import { formatDate } from '../../util/helper';

import styles from './DiaryItem.module.css';

function DiaryItem({ diary }) {
  return (
    <li id={styles.item}>
      <Link className={styles.title} to={`${diary.id}`}>
        <h2>{diary.title}</h2>
        <time className={styles.date}>{formatDate(diary.created_at)}</time>
      </Link>
    </li>
  );
}

export default DiaryItem;
