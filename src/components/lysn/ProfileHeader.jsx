import { formatLysnDate } from '../../util/helper';

import styles from './ProfileHeader.module.css';

function ProfileHeader({ date }) {
  return (
    <div className={styles.header}>
      <div className={styles['img-wrap']}>
        <img src="https://i.ibb.co/J2vBMyX/irene.jpg" />
      </div>
      <div className={styles.info}>
        <h4 className={styles.name}>
          <span className={styles.artist}>ARTIST</span>
          <span>IRENE</span>
        </h4>
        <time className={styles.date}>{formatLysnDate(date)}</time>
      </div>
    </div>
  );
}

export default ProfileHeader;
