import FeedHeader from '../components/instagram/FeedHeader';
import StoryPost from '../components/instagram/StoryPost';
import MoveBack from '../components/MoveBack';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function StoriesDetail({ account }) {
  return (
    <Transition>
      <Main small>
        <MoveBack />
        <FeedHeader account={account} />
        <StoryPost />
      </Main>
    </Transition>
  );
}

export default StoriesDetail;
