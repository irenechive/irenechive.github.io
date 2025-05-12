import FeedList from '../components/instagram/FeedList';

import Main from '../UI/Main';
import Transition from '../UI/Transition';

import InstagramLayout from '../UI/InstagramLayout';

function RedVelvet() {
  return (
    <Transition>
      <Main>
        <InstagramLayout>
          <FeedList />
        </InstagramLayout>
      </Main>
    </Transition>
  );
}

export default RedVelvet;
