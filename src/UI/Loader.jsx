import styles from './Loader.module.css';

function Loader() {
  return (
    <div id={styles.loader}>
      <svg viewBox="25 25 50 50">
        <circle r={20} cx={50} cy={50} />
      </svg>
    </div>
  );
}

export default Loader;
