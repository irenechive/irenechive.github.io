import ContentPost from '../components/contents/ContentPost';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function ContentsDetail() {
  return (
    <Transition>
      <Main>
        <ContentPost />
      </Main>
    </Transition>
  );
}

export default ContentsDetail;
