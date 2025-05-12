import { Fragment } from 'react';

import Loader from '../../UI/Loader';
import LinkIcon from '../../icons/LinkIcon';

import { useInstagram } from '../../service/instagram/useInstagram';

import { formatDate } from '../../util/helper';

import styles from './FeedPost.module.css';

function FeedPost() {
  const { post, isLoading } = useInstagram();

  if (isLoading) return <Loader />;

  const { created_at, content, data, source } = post;

  function contentMarkup(type, data) {
    if (type === 'video')
      return (
        <video preload="metadata" controls>
          <source src={`${data}#t=0.5`} />
        </video>
      );

    if (type === 'image') return <img src={data} />;
  }

  return (
    <article id={styles.article}>
      <div className={styles.data}>
        {data.map(dt => (
          <Fragment key={dt.id}>{contentMarkup(dt.type, dt.data)}</Fragment>
        ))}
      </div>
      {content && <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />}
      <footer className={styles.footer}>
        <time className={styles.date}>{formatDate(created_at)}</time>
        <a className={styles.source} href={source} target="_blank">
          <LinkIcon />
          <span>Original source</span>
        </a>
      </footer>
    </article>
  );
}

export default FeedPost;
