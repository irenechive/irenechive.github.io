import RookiesList from '../components/rookies/RookiesList';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function Rookies() {
  return (
    <Transition>
      <Main>
        <RookiesList />
      </Main>
    </Transition>
  );
}

export default Rookies;
