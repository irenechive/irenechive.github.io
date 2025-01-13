import StoryList from '../components/instagram/StoryList';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function Stories() {
  return (
    <Transition>
      <Main>
        <StoryList />
      </Main>
    </Transition>
  );
}

export default Stories;
