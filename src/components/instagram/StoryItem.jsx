import { Link } from 'react-router-dom';

import SlideIcon from '../../icons/SlideIcon';

import { formatDate } from '../../util/helper';

import styles from './StoryItem.module.css';
import Label from '../Label';

function StoryItem({ story }) {
  let thumbIcon;
  const { id, created_at, thumbnail, content } = story;

  if (content.length > 1) thumbIcon = <SlideIcon />;

  return (
    <li className={styles.story}>
      <Link className={styles.thumb} to={`${id}`}>
        {thumbIcon}
        <Label label={formatDate(created_at)} />
        <img src={thumbnail} />
      </Link>
    </li>
  );
}

export default StoryItem;
