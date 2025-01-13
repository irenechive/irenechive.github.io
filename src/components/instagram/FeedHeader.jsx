import { useAccount } from '../../service/account/useAccount';

import VerifiedIcon from '../../icons/VerifiedIcon';

import styles from './FeedHeader.module.css';

function FeedHeader({ account }) {
  const { account: data, isLoading } = useAccount();

  if (isLoading) return null;

  const dt = data.filter(d => d.handle === account && d.platform === 'instagram')?.at(0);

  return (
    <header id={styles.header}>
      <img className={styles.img} src={dt?.img} />
      <span className={styles.handle}>
        <span>{dt?.handle}</span>
        <VerifiedIcon />
      </span>
    </header>
  );
}

export default FeedHeader;
