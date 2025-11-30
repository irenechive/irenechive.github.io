import Loader from '../../UI/Loader';
import Pagination from '../Pagination';

import { useTweets } from '../../service/twitter/useTweets';

import { TWEET_PAGE_SIZE } from '../../util/constants';

import TweetItem from './TweetItem';

import styles from './TweetList.module.css';

function TweetList() {
  const { tweets, count, isLoading } = useTweets();

  if (isLoading) return <Loader />;

  return (
    <>
      <p className={styles.searchlist}>
        총 <strong>{count}</strong>개의 게시물
      </p>
      <ul id={styles.tweet}>
        {tweets.length > 0 && tweets.map(tweet => <TweetItem key={tweet.id} tweet={tweet} />)}
        {tweets.length === 0 && <p className={styles.onerror}>해당 필터로 등록된 자료가 없습니다.</p>}
      </ul>
      <Pagination count={count || 1} size={TWEET_PAGE_SIZE} />
    </>
  );
}

export default TweetList;
