import { Fragment } from 'react';

import Loader from '../../UI/Loader';
import LinkIcon from '../../icons/LinkIcon';

import { useInstagram } from '../../service/instagram/useInstagram';

import { formatDate } from '../../util/helper';

import styles from './FeedPost.module.css';

function FeedPost() {
  const { post, isLoading } = useInstagram();

  if (isLoading) return <Loader />;

  const { created_at, content, data, source, hq } = post;

  function contentMarkup(type, data) {
    if (type === 'video')
      return (
        <video preload="metadata" controls>
          <source src={`${data}#t=0.5`} />
        </video>
      );

    if (type === 'image') return <img src={data} />;
  }

  console.log(hq.at(0).link);

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
        <div>
          {hq && hq.length < 2 && (
            <a className={styles.source} href={hq.at(0).link}>
              <LinkIcon />
              <span>HQ source</span>
            </a>
          )}
          {hq && hq.length > 1 && (
            <span className={styles.source}>
              <LinkIcon />
              <span>HQ source: </span>
              {hq.map((data, i) => (
                <>
                  <a key={data.link} className={styles['source-link']} href={data.link}>
                    {i + 1}
                  </a>
                  <span className={styles.slash}>/</span>
                </>
              ))}
            </span>
          )}
          <a className={styles.source} href={source} target="_blank">
            <LinkIcon />
            <span>Original source</span>
          </a>
        </div>
      </footer>
    </article>
  );
}

export default FeedPost;
