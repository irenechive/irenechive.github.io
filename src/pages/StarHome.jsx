import { Navigate } from 'react-router-dom';

import Main from '../UI/Main';
import Transition from '../UI/Transition';

function StarHome() {
  const pathName = window.location.pathname;

  return (
    <Transition>
      <Main>{pathName === '/star' && <Navigate to="/instagram/rv" />}</Main>
    </Transition>
  );
}

export default StarHome;
