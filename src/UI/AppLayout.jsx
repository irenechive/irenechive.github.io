import Transition from './Transition';

import styles from './AppLayout.module.css';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

function AppLayout() {
  return (
    <Transition>
      <div id={styles.app}>
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </Transition>
  );
}

export default AppLayout;
