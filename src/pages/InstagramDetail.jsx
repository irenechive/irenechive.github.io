import FeedPost from '../components/instagram/FeedPost';
import FeedHeader from '../components/instagram/FeedHeader';
import MoveBack from '../components/MoveBack';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function InstagramDetail({ account }) {
  return (
    <Transition>
      <Main small>
        <MoveBack />
        <FeedHeader account={account} />
        <FeedPost />
      </Main>
    </Transition>
  );
}

export default InstagramDetail;
