import styles from './Main.module.css';

function Main({ small, min, children }) {
  let className;

  if (small) className = styles.small;
  if (min) className = styles.min;

  return (
    <main id={styles.main} className={className}>
      {children}
    </main>
  );
}

export default Main;
