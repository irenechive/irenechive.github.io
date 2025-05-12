import RookiesContent from '../components/rookies/RookiesContent';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function RookiesDetail() {
  return (
    <Transition>
      <Main>
        <RookiesContent />
      </Main>
    </Transition>
  );
}

export default RookiesDetail;
