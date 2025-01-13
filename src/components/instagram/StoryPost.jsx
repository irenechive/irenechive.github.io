import { Fragment } from 'react';

import Loader from '../../UI/Loader';

import { useStory } from '../../service/instagram/useStory';

import { formatDate } from '../../util/helper';

import styles from './StoryPost.module.css';

function FeedPost() {
  const { story, isLoading } = useStory();

  if (isLoading) return <Loader />;

  const { created_at, content } = story;

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
        {content.map(dt => (
          <Fragment key={dt.id}>{contentMarkup(dt.type, dt.data)}</Fragment>
        ))}
      </div>
      <footer className={styles.footer}>
        <time className={styles.date}>{formatDate(created_at)}</time>
      </footer>
    </article>
  );
}

export default FeedPost;
