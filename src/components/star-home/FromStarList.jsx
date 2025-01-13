import { useSearchParams } from 'react-router-dom';

import Loader from '../../UI/Loader';
import FromStarItem from './FromStarItem';
import FromStarTab from './FromStarTab';

import { useFromStars } from '../../service/star-home/useFromStars';

import styles from './FromStarList.module.css';
import Pagination from '../Pagination';
import { STAR_PAGE_SIZE } from '../../util/constants';

function FromStarList() {
  const [searchParams] = useSearchParams();
  const { from_stars, count, isLoading } = useFromStars();

  const curTab = !searchParams.get('filter') ? 'irene' : searchParams.get('filter');

  if (isLoading) return <Loader />;

  return (
    <>
      <FromStarTab curTab={curTab} />
      <ul id={styles.star}>
        {from_stars.map(item => (
          <FromStarItem key={item.id} item={item} />
        ))}
      </ul>
      <Pagination count={count} size={STAR_PAGE_SIZE} />
    </>
  );
}

export default FromStarList;
