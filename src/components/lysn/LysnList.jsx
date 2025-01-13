import { useLysns } from '../../service/lysn/useLysns';

import LysnItem from './LysnItem';
import Pagination from '../Pagination';

import Loader from '../../UI/Loader';

import { LYSN_PAGE_SIZE } from '../../util/constants';

import styles from './LysnList.module.css';

function LysnList() {
  const { lysns, count, isLoading } = useLysns();

  if (isLoading) return <Loader />;

  return (
    <>
      <ul id={styles.lysn}>
        {lysns.map(lysn => (
          <LysnItem key={lysn.id} lysn={lysn} />
        ))}
      </ul>
      <Pagination count={count} size={LYSN_PAGE_SIZE} />
    </>
  );
}

export default LysnList;
