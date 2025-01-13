import { Link } from 'react-router-dom';

import Pick from './Pick';
import ProfileHeader from './ProfileHeader';

import ChevronRightIcon from '../../icons/ChevronRightIcon';

import styles from './LysnItem.module.css';

function LysnItem({ lysn }) {
  const { id, created_at, title, thumbnail, content, pick } = lysn;

  return (
    <li className={styles.lysn}>
      {pick && <Pick />}
      <ProfileHeader date={created_at} />
      <div className={styles.wrap}>
        {title && (
          <h2 className={styles.title}>
            <Link to={`${id}`}>{title}</Link>
          </h2>
        )}
        {content && <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />}
        {thumbnail && (
          <div className={styles.thumb}>
            <img src={thumbnail} />
          </div>
        )}
      </div>
      <Link className={styles.more} to={`${id}`}>
        <span>Read more</span>
        <ChevronRightIcon />
      </Link>
    </li>
  );
}

export default LysnItem;
