import { Link } from 'react-router-dom';

import SlideIcon from '../../icons/SlideIcon';
import VideoIcon from '../../icons/VideoIcon';

import { formatDate } from '../../util/helper';

import styles from './FeedItem.module.css';

function FeedItem({ item }) {
  let thumbIcon = null;
  const { id, thumbnail, icon, created_at } = item;

  if (icon === 'video') thumbIcon = <VideoIcon />;
  if (icon === 'slide') thumbIcon = <SlideIcon />;

  return (
    <li className={styles.feed}>
      <Link className={styles.thumb} to={`${id}`}>
        {thumbIcon}
        <time className={styles.date}>{formatDate(created_at)}</time>
        <img src={thumbnail} />
      </Link>
    </li>
  );
}

export default FeedItem;
