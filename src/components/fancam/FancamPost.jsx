import MoveBack from '../MoveBack';

import { useFancam } from '../../service/fancam/useFancam';

import { formatDate } from '../../util/helper';

import styles from './FancamPost.module.css';
import Loader from '../../UI/Loader';

function FancamPost() {
  const { fancam, isLoading } = useFancam();

  if (isLoading) return <Loader />;

  return (
    <>
      <MoveBack />
      <article id={styles.article}>
        <div className={styles.video} dangerouslySetInnerHTML={{ __html: fancam.iframe }} />
        <time className={styles.date}>{formatDate(fancam.created_at)}</time>
        <h1 className={styles.title}>{fancam.title}</h1>
      </article>
    </>
  );
}

export default FancamPost;
