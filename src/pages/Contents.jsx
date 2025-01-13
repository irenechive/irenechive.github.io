import ContentList from '../components/contents/ContentList';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function Contents() {
  return (
    <Transition>
      <Main>
        <ContentList />
      </Main>
    </Transition>
  );
}

export default Contents;
