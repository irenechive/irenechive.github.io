import TweetPost from '../components/twitter/TweetPost';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function TweetDetail() {
  return (
    <Transition>
      <Main small>
        <TweetPost />
      </Main>
    </Transition>
  );
}

export default TweetDetail;
