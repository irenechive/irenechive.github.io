import LysnReplyItem from './LysnReplyItem';

import styles from './LysnReplyList.module.css';

function LysnReplyList({ reply }) {
  return (
    <ul id={styles.reply}>
      {reply.map(item => (
        <LysnReplyItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default LysnReplyList;
