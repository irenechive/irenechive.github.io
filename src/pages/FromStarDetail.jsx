import FromStarPost from '../components/star-home/FromStarPost';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function FromStarDetail() {
  return (
    <Transition>
      <Main small>
        <FromStarPost />
      </Main>
    </Transition>
  );
}

export default FromStarDetail;
