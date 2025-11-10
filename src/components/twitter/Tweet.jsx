import { Fragment } from 'react';

import LinkIcon from '../../icons/LinkIcon';
import VerifiedTwitterIcon from '../../icons/VerifiedTwitterIcon';

import { useAccount } from '../../service/account/useAccount';

import { formatLysnDate, formatTime } from '../../util/helper';

import styles from './Tweet.module.css';

function Tweet({ tweet, thread }) {
  const { account, isLoading } = useAccount();
  const { created_at, content, data, source } = tweet;

  if (isLoading) return null;

  const twtAcc = account?.filter(acc => acc.platform === 'twitter')?.at(-1);

  function dataMarkup(type, data) {
    if (type === 'iframe') return <div dangerouslySetInnerHTML={{ __html: data }} />;

    if (type === 'image') return <img src={data} />;

    if (type === 'video')
      return (
        <video controls>
          <source src={`${data}#t=0.5`} />
        </video>
      );
  }

  const tweetContent = (
    <article id={styles.tweet}>
      <header className={styles.header}>
        <img className={styles.profile} src={twtAcc.img} />
        <div>
          <h2 className={styles.name}>
            <span>{twtAcc.name}</span>
            <VerifiedTwitterIcon />
          </h2>
          <p className={styles.handle}>@{twtAcc.handle}</p>
        </div>
      </header>
      {content && <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />}
      {data && (
        <div className={styles.data}>
          {data.map(dt => (
            <Fragment key={dt.id}>{dataMarkup(dt.type, dt.data)}</Fragment>
          ))}
        </div>
      )}
      <footer className={styles.footer}>
        <time className={styles.time}>
          {formatLysnDate(created_at)} · {formatTime(created_at)}
        </time>
        <a className={styles.source} href={source} target="_blank">
          <LinkIcon />
          <span>Original source</span>
        </a>
      </footer>
    </article>
  );

  if (thread) return <div className={styles.thread}>{tweetContent}</div>;

  return tweetContent;
}

export default Tweet;
