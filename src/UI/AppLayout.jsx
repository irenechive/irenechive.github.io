import { Outlet } from 'react-router-dom';

import TopButton from '../components/TopButton';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Transition from './Transition';

import styles from './AppLayout.module.css';

function AppLayout() {
  return (
    <Transition>
      <div id={styles.app}>
        <Header />
        <Nav />
        <Outlet />
        <Footer />
        <TopButton />
      </div>
    </Transition>
  );
}

export default AppLayout;
