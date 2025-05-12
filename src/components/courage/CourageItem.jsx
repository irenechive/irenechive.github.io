import { useState } from 'react';

import DownloadIcon from '../../icons/DownloadIcon';
import DownloadButton from '../DownloadButton';

import styles from './CourageItem.module.css';

function CourageItem({ courage }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const { title, title_en, front, back } = courage;

  async function handleDownload(src) {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement('a');

      a.href = url;
      a.download = src.split('/').pop() || 'download';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      setIsDownloading(false);
    }
  }

  function handleDownloadAll() {
    handleDownload(front);
    handleDownload(back);
  }

  return (
    <li>
      <div id={styles.charm}>
        <div className={styles['card-wrap']}>
          <div className={styles.card}>
            <div className={styles.overlay} />
            <img className={styles.front} src={front} />
            <img className={styles.back} src={back} />
          </div>
        </div>
        <div className={styles['card-info']}>
          <h4 className={styles.title}>{title} 부적</h4>
          <p className={styles.en}>{title_en} Charm</p>
        </div>
        <div className={styles.action}>
          <DownloadButton onClick={() => handleDownload(front)}>FRONT</DownloadButton>
          <DownloadButton onClick={() => handleDownload(back)}>BACK</DownloadButton>
          <DownloadButton onClick={handleDownloadAll}>
            <DownloadIcon />
          </DownloadButton>
        </div>
      </div>
    </li>
  );
}

export default CourageItem;
