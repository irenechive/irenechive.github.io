import styles from './DownloadButton.module.css';

function DownloadButton({ children, onClick, ...props }) {
  return (
    <button type="button" className={styles.btn} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default DownloadButton;
