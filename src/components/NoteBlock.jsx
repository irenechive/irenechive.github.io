import NoteIcon from '../icons/NoteIcon';

import styles from './NoteBlock.module.css';

function NoteBlock({ data }) {
  return (
    <blockquote id={styles.note}>
      <NoteIcon />
      <div>
        <h3 className={styles.title}>{data.title}</h3>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </blockquote>
  );
}

export default NoteBlock;
