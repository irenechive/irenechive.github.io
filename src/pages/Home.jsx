import mainImg from '../assets/main.jpg';

import Transition from '../UI/Transition';

import styles from './Home.module.css';

function Home() {
  return (
    <Transition id={styles.home}>
      <div className={styles['row--1']}>
        <img className={styles.logo} src="logo.png" />
        <p>
          in the depths of uncertainty,
          <br />
          we find the strength to bloom
        </p>
      </div>
      <div className={styles['row--2']}>
        <img src={mainImg} />
      </div>
    </Transition>
  );
}

export default Home;
