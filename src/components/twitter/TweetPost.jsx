import Tweet from './Tweet';
import MoveBack from '../MoveBack';

import Loader from '../../UI/Loader';

import { useTweet } from '../../service/twitter/useTweet';

import styles from './TweetPost.module.css';

function TweetPost() {
  const { tweet, isLoading } = useTweet();

  if (isLoading) return <Loader />;

  return (
    <>
      <MoveBack />
      <Tweet tweet={tweet} />
      {tweet.thread &&
        tweet.thread.length > 0 &&
        tweet.thread.map(thread => <Tweet key={thread.id} tweet={thread} thread />)}
    </>
  );
}

export default TweetPost;
