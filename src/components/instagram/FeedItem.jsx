import { Link } from 'react-router-dom';

import Label from '../Label';

import SlideIcon from '../../icons/SlideIcon';
import VideoIcon from '../../icons/VideoIcon';

import { formatDate } from '../../util/helper';

import styles from './FeedItem.module.css';

function FeedItem({ item }) {
  let thumbIcon = null;
  const { id, thumbnail, created_at, data } = item;

  if (data?.length > 1) thumbIcon = <SlideIcon />;
  if (data?.length === 1 && data[0].type === 'video') thumbIcon = <VideoIcon />;

  return (
    <li className={styles.feed}>
      <Link className={styles.thumb} to={`${id}`}>
        {thumbIcon}
        <Label label={formatDate(created_at)} />
        <img src={thumbnail} />
      </Link>
    </li>
  );
}

export default FeedItem;
