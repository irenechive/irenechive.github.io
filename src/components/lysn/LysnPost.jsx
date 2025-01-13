import { useLysn } from '../../service/lysn/useLysn';

import Loader from '../../UI/Loader';

import ProfileHeader from './ProfileHeader';

import styles from './LysnPost.module.css';
import LysnReplyList from './LysnReplyList';
import MoveBack from '../MoveBack';

function LysnPost() {
  const { lysn, isLoading } = useLysn();

  if (isLoading) return <Loader />;

  function attachmentMarkup(type, data) {
    if (type === 'video')
      return (
        <video controls>
          <source src={data} />
        </video>
      );

    if (type === 'image') return <img src={data} />;
  }

  return (
    <>
      <MoveBack />
      <article className={styles.lysn}>
        <ProfileHeader date={lysn?.created_at} />
        <div className={styles.wrap}>
          {lysn?.title && <h2 className={styles.title}>{lysn?.title}</h2>}
          {lysn?.content && <div className={styles.content} dangerouslySetInnerHTML={{ __html: lysn?.content }} />}
          {lysn?.attachment && (
            <div className={styles.attachment}>
              {attachmentMarkup(lysn?.attachment.at(0).type, lysn?.attachment.at(0).data)}
            </div>
          )}
        </div>
        {lysn?.reply && <LysnReplyList reply={lysn?.reply} />}
      </article>
    </>
  );
}

export default LysnPost;
