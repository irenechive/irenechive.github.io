import { useSearchParams } from 'react-router-dom';

import TwitterTab from '../components/twitter/TwitterTab';
import TwitterDropDownEra from '../components/twitter/TwitterDropDownEra';
import TwitterDropDownYear from '../components/twitter/TwitterDropDownYear';

import NoteBlock from '../components/NoteBlock';

import { useNote } from '../service/note/useNote';

import styles from './TwitterLayout.module.css';

function TwitterLayout({ children }) {
  const [searchParams] = useSearchParams();
  const { note, isLoading } = useNote();

  const curTab = !searchParams.get('filter') ? 'irene' : searchParams.get('filter');
  const curYear = +searchParams.get('year');
  const curEra = searchParams.get('era');

  return (
    <>
      {!isLoading && note && note?.show && <NoteBlock data={note} />}
      <header className={styles.header}>
        <div className={styles['tab-header']}>
          <TwitterTab curTab={curTab} />
        </div>
        <div className={styles.wrap}>
          <TwitterDropDownEra curEra={curEra} curTab={curTab} />
          <TwitterDropDownYear minYear={2017} curTab={curTab} curYear={curYear} />
        </div>
      </header>
      {children}
    </>
  );
}

export default TwitterLayout;
