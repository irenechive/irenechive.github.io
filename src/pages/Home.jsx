import mainImg from '../assets/main-2.jpg';
import IreneIcon from '../icons/IreneIcon';

import Transition from '../UI/Transition';

import styles from './Home.module.css';

function Home() {
  return (
    <Transition id={styles.home}>
      <div className={styles['col--1']}>
        <h1 className={styles.title}>
          irene<span>(chive)</span>
        </h1>
        <p className={styles.desc}>
          hey, remember those days it hasn’t changed at all
          <br />
          it’s just the same as it was back then the shining eyes are no different
          <br />
          look, we are standing together towards that beautiful castle on the start line
        </p>
        <IreneIcon />
        <p className={styles['desc--btm']}>( in the depths of uncertainty, we find the strength to bloom )</p>
      </div>
      <div className={styles['col--2']}>
        <img src={mainImg} />
      </div>
    </Transition>
  );
}

export default Home;
