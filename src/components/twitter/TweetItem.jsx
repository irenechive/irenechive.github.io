import { Link } from 'react-router-dom';

import SlideIcon from '../../icons/SlideIcon';
import VideoIcon from '../../icons/VideoIcon';

import { formatDate } from '../../util/helper';

import styles from './TweetItem.module.css';

function TweetItem({ tweet }) {
  let icon;
  const { id, created_at, thumbnail, data } = tweet;

  if (data?.length > 1) icon = <SlideIcon />;
  if (data?.length === 1 && (data?.[0]?.type === 'video' || data?.[0]?.type === 'iframe')) icon = <VideoIcon />;

  return (
    <li className={styles.tweet}>
      <Link className={styles.thumb} to={`${id}`}>
        {icon}
        <time className={styles.date}>{formatDate(created_at)}</time>
        <img src={thumbnail} />
      </Link>
    </li>
  );
}

export default TweetItem;
