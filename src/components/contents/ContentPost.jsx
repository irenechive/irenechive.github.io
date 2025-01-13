import Loader from '../../UI/Loader';
import MoveBack from '../MoveBack';

import { useContent } from '../../service/contents/useContent';

import { formatDate } from '../../util/helper';

import styles from './ContentPost.module.css';

function ContentPost() {
  const { content, isLoading } = useContent();

  if (isLoading) return <Loader />;

  return (
    <>
      <MoveBack />
      <article id={styles.article}>
        <div className={styles.video} dangerouslySetInnerHTML={{ __html: content.iframe }} />
        <time className={styles.date}>{formatDate(content.created_at)}</time>
        <h1 className={styles.title}>{content.title}</h1>
      </article>
    </>
  );
}

export default ContentPost;
