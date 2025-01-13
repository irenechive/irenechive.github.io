import { useFromStar } from '../../service/star-home/useFromStar';

import Loader from '../../UI/Loader';
import { formatDate } from '../../util/helper';
import MoveBack from '../MoveBack';

import styles from './FromStarPost.module.css';

function FromStarPost() {
  const { from_star, isLoading } = useFromStar();

  if (isLoading) return <Loader />;

  return (
    <>
      <MoveBack />
      <article>
        <header className={styles.header}>
          <h1 className={styles.title}>{from_star.title}</h1>
          <time className={styles.date}>{formatDate(from_star.created_at)}</time>
        </header>
        <div className={styles.wrap} dangerouslySetInnerHTML={{ __html: from_star.content }} />
      </article>
    </>
  );
}

export default FromStarPost;
