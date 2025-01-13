import { Navigate } from 'react-router-dom';

import Main from '../UI/Main';
import Transition from '../UI/Transition';

function Instagram() {
  const pathName = window.location.pathname;

  return (
    <Transition>
      <Main>{pathName === '/instagram' && <Navigate to="/instagram/rv" />}</Main>
    </Transition>
  );
}

export default Instagram;
