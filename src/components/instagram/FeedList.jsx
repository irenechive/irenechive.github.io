import FeedItem from './FeedItem';
import Pagination from '../Pagination';
import Loader from '../../UI/Loader';

import { useInstagrams } from '../../service/instagram/useInstagrams';

import { FEED_PAGE_SIZE } from '../../util/constants';

import styles from './FeedList.module.css';

function FeedList() {
  const { feed, isLoading, count } = useInstagrams();

  if (isLoading) return <Loader />;

  return (
    <>
      <p className={styles.searchlist}>
        총 <strong>{count}</strong>개의 게시물
      </p>
      <ul id={styles.feed}>
        {feed.map(item => (
          <FeedItem key={item.id} item={item} />
        ))}
      </ul>
      <Pagination count={count} size={FEED_PAGE_SIZE} />
    </>
  );
}

export default FeedList;
