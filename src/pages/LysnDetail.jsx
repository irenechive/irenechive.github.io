import LysnPost from '../components/lysn/LysnPost';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function LysnDetail() {
  return (
    <Transition>
      <Main min>
        <LysnPost />
      </Main>
    </Transition>
  );
}

export default LysnDetail;
