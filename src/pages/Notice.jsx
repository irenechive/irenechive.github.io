import { useNotice } from '../service/notice/useNotice';
import Loader from '../UI/Loader';
import Main from '../UI/Main';
import Transition from '../UI/Transition';
import { formatDate } from '../util/helper';

import styles from './Notice.module.css';

function Notice() {
  const { notice, isLoading } = useNotice();

  if (isLoading)
    return (
      <Transition>
        <Loader />
      </Transition>
    );

  const { created_at, title, content, last_updated } = notice;

  return (
    <Transition>
      <Main>
        <article id={styles.notice}>
          <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <time className={styles.date}>{formatDate(created_at)}</time>
          </header>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
          <div className={styles.updated}>
            <span>최종 업데이트</span>
            <time>{formatDate(last_updated)}</time>
          </div>
        </article>
      </Main>
    </Transition>
  );
}

export default Notice;
