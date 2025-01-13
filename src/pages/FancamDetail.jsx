import FancamPost from '../components/fancam/FancamPost';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function FancamDetail() {
  return (
    <Transition>
      <Main>
        <FancamPost />
      </Main>
    </Transition>
  );
}

export default FancamDetail;
