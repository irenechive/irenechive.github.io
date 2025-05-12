import TweetList from '../components/twitter/TweetList';
import Main from '../UI/Main';
import Transition from '../UI/Transition';
import TwitterLayout from '../UI/TwitterLayout';

function Twitter() {
  return (
    <Transition>
      <Main>
        <TwitterLayout>
          <TweetList />
        </TwitterLayout>
      </Main>
    </Transition>
  );
}

export default Twitter;
