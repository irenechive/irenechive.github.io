import styles from './Label.module.css';

function Label({ label }) {
  return <div className={styles.label}>{label}</div>;
}

export default Label;
