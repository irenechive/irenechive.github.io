import FromStarList from '../components/star-home/FromStarList';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function FromStar() {
  return (
    <Transition>
      <Main>
        <FromStarList />
      </Main>
    </Transition>
  );
}

export default FromStar;
