import { useMoveBack } from '../hook/useMoveBack';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';

import styles from './MoveBack.module.css';

function MoveBack() {
  const moveBack = useMoveBack();

  return (
    <button className={styles.btn} onClick={moveBack}>
      <ArrowLeftIcon />
      <span>Back</span>
    </button>
  );
}

export default MoveBack;
