import { Link } from 'react-router-dom';

import SlideIcon from '../../icons/SlideIcon';

import { formatDate } from '../../util/helper';

import styles from './StoryItem.module.css';

function StoryItem({ story }) {
  let thumbIcon;
  const { id, created_at, thumbnail, content } = story;

  if (content.length > 1) thumbIcon = <SlideIcon />;

  return (
    <li className={styles.story}>
      <Link className={styles.thumb} to={`${id}`}>
        {thumbIcon}
        <time className={styles.date}>{formatDate(created_at)}</time>
        <img src={thumbnail} />
      </Link>
    </li>
  );
}

export default StoryItem;
