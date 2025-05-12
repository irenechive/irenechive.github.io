import LysnList from '../components/lysn/LysnList';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function Lysn() {
  return (
    <Transition>
      <Main min>
        <LysnList />
      </Main>
    </Transition>
  );
}

export default Lysn;
