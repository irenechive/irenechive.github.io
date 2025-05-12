import DiaryItem from './DiaryItem';
import Pagination from '../Pagination';

import Loader from '../../UI/Loader';

import { useDiaries } from '../../service/star-home/useDiaries';

import { STAR_PAGE_SIZE } from '../../util/constants';

import styles from './DiaryList.module.css';

function DiaryList() {
  const { diaries, count, isLoading } = useDiaries();

  if (isLoading) return <Loader />;

  return (
    <>
      <ul id={styles.diary}>
        {diaries.map(diary => (
          <DiaryItem key={diary.id} diary={diary} />
        ))}
      </ul>
      <Pagination count={count} size={STAR_PAGE_SIZE} />
    </>
  );
}

export default DiaryList;
