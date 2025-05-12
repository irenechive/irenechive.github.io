import FancamList from '../components/fancam/FancamList';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function Fancam() {
  return (
    <Transition>
      <Main>
        <FancamList />
      </Main>
    </Transition>
  );
}

export default Fancam;
