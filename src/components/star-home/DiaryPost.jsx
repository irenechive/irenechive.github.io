import MoveBack from '../MoveBack';
import Loader from '../../UI/Loader';

import { formatDate } from '../../util/helper';

import { useDiary } from '../../service/star-home/useDiary';

import styles from './DiaryPost.module.css';

function DiaryPost() {
  const { diary, isLoading } = useDiary();

  if (isLoading) return <Loader />;

  return (
    <>
      <MoveBack />
      <article>
        <header className={styles.header}>
          <h1 className={styles.title}>{diary.title}</h1>
          <time className={styles.date}>{formatDate(diary.created_at)}</time>
        </header>
        <div className={styles.wrap} dangerouslySetInnerHTML={{ __html: diary.content }} />
      </article>
    </>
  );
}

export default DiaryPost;
