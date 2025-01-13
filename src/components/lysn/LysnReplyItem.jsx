import { formatLysnDate } from '../../util/helper';

import styles from './LysnReplyItem.module.css';

function LysnReplyItem({ item }) {
  return (
    <li className={styles.item}>
      <div className={styles.wrap}>
        <img src="https://i.ibb.co/J2vBMyX/irene.jpg" />
      </div>
      <div className={styles['col--2']}>
        <div className={styles['name-wrap']}>
          <div className={styles.info}>
            <h4 className={styles.name}>
              <span className={styles.artist}>ARTIST</span>
              <span>IRENE</span>
            </h4>
            <time className={styles.date}>{formatLysnDate(item.created_at)}</time>
          </div>
        </div>
        {item.content && <div className={styles.content} dangerouslySetInnerHTML={{ __html: item.content }} />}
        {item.img && <img className={styles.img} src={item.img} />}
      </div>
    </li>
  );
}

export default LysnReplyItem;
