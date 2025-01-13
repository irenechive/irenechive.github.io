import Pagination from '../Pagination';
import FancamItem from './FancamItem';

import Loader from '../../UI/Loader';

import { useFancams } from '../../service/fancam/useFancams';

import { FANCAM_PAGE_SIZE } from '../../util/constants';

import styles from './FancamList.module.css';

function FancamList() {
  const { fancams, count, isLoading } = useFancams();

  if (isLoading) return <Loader />;

  return (
    <>
      <p className={styles.searchlist}>
        총 <strong>{count}</strong>개의 게시물
      </p>
      <ul id={styles.fancams}>
        {fancams.map(fancam => (
          <FancamItem key={fancam.id} fancam={fancam} />
        ))}
      </ul>
      <Pagination count={count} size={FANCAM_PAGE_SIZE} />
    </>
  );
}

export default FancamList;
