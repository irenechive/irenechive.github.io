import { useSearchParams } from 'react-router-dom';

import InstagramTab from '../components/instagram/InstagramTab';
import InstagramDropDown from '../components/instagram/InstagramDropDown';
import InstagramDropDownYear from '../components/instagram/InstagramDropDownYear';

import NoteBlock from '../components/NoteBlock';

import { useNote } from '../service/note/useNote';

import styles from './InstagramLayout.module.css';

function InstagramLayout({ children }) {
  const [searchParams] = useSearchParams();
  const { note, isLoading } = useNote();

  const curTab = !searchParams.get('filter') ? 'irene' : searchParams.get('filter');
  const curMember = searchParams.get('member');
  const curYear = +searchParams.get('year');

  return (
    <>
      {!isLoading && note && note?.show && <NoteBlock data={note} />}
      <header className={styles.header}>
        <InstagramTab curTab={curTab} />
        <div className={styles.wrap}>
          <InstagramDropDown curMember={curMember} />
          <InstagramDropDownYear curTab={curTab} curMember={curMember} curYear={curYear} />
        </div>
      </header>
      {children}
    </>
  );
}

export default InstagramLayout;
