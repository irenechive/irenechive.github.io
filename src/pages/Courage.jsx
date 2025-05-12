import CourageList from '../components/courage/CourageList';

import Main from '../UI/Main';
import Transition from '../UI/Transition';

function Courage() {
  return (
    <Transition>
      <Main small>
        <CourageList />
      </Main>
    </Transition>
  );
}

export default Courage;
