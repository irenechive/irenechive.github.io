import { useRookies } from '../../service/rookies/useRookies';

import Loader from '../../UI/Loader';
import RookiesItem from './RookiesItem';

import styles from './RookiesList.module.css';

function RookiesList() {
  const { rookies, isLoading } = useRookies();

  if (isLoading) return <Loader />;

  return (
    <ul id={styles.rookies}>
      {rookies.map(rookie => (
        <RookiesItem key={rookie.id} rookie={rookie} />
      ))}
    </ul>
  );
}

export default RookiesList;
