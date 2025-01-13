import LinkIcon from '../../icons/LinkIcon';
import { useRookie } from '../../service/rookies/useRookie';

import Loader from '../../UI/Loader';
import { formatDate } from '../../util/helper';
import MoveBack from '../MoveBack';

import styles from './RookiesContent.module.css';

function RookiesContent() {
  let dataMarkup;
  const { rookie, isLoading } = useRookie();

  if (isLoading) return <Loader />;

  const {
    created_at,
    type,
    content: [{ title, data, content, source }],
  } = rookie;

  if (type === 'image') dataMarkup = `<img src=${data} />`;
  else dataMarkup = data;

  return (
    <>
      <MoveBack />
      <article id={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <time className={styles.date}>{formatDate(created_at)}</time>
        </header>
        <div className={styles.wrap}>
          <div className={styles.data} dangerouslySetInnerHTML={{ __html: dataMarkup }} />
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <footer className={styles.footer}>
          <a className={styles.link} href={source} target="_blank">
            <LinkIcon />
            <span>Original Source</span>
          </a>
        </footer>
      </article>
    </>
  );
}

export default RookiesContent;
