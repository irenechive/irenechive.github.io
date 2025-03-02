import DownloadIcon from '../../icons/DownloadIcon';
import { useCourage } from '../../service/courage/useCourage';

import Loader from '../../UI/Loader';
import DownloadButton from '../DownloadButton';
import CourageItem from './CourageItem';

import styles from './CourageList.module.css';

function CourageList() {
  const { courage, isLoading } = useCourage();

  if (isLoading) return <Loader />;

  return (
    <>
      <header id={styles.header}>
        <h2 className={styles.title}>용기 부적(Courage Charms)</h2>
        <p>주현이로부터 용기가 도착했습니다🐰💌</p>
        <blockquote className={styles.notice}>
          <div className={styles.content}>
            <div>
              앞면 또는 뒷면을 선택해 다운받으시려면 <DownloadButton>FRONT</DownloadButton> /{' '}
              <DownloadButton>BACK</DownloadButton> 버튼을 클릭해 주세요.
            </div>
            <div>
              앞면과 뒷면 모두 다운받으시려면{' '}
              <DownloadButton>
                <DownloadIcon />
              </DownloadButton>{' '}
              버튼을 클릭해 주시면 됩니다.
            </div>
          </div>
          <div className={styles.content}>
            <div>
              To selectively download the image, use <DownloadButton>FRONT</DownloadButton> /{' '}
              <DownloadButton>BACK</DownloadButton> button.
            </div>
            <div>
              For downloading both front AND back, click{' '}
              <DownloadButton>
                <DownloadIcon />
              </DownloadButton>{' '}
              button.
            </div>
          </div>
        </blockquote>
      </header>
      <ul id={styles.charms}>
        {courage.map(crge => (
          <CourageItem key={crge.id} courage={crge} />
        ))}
      </ul>
      <div className={styles.info}>
        <h3>🌷On the Start Line of [Like A Flower]🌷</h3>
        <div>
          <p>
            <span>부적 사이즈</span> 55*85 (mm)
          </p>
          <p>
            <span>도안 사이즈</span> 57*87 (mm) / 재단여백 2mm 포함
          </p>
        </div>
        <div>
          <p>
            <span>Charm Photocard size</span> 55*85(mm)
          </p>
          <p>
            <span>File size</span> 57*87(mm) / including bleed(=cutting margin) 2mm
          </p>
        </div>
      </div>
    </>
  );
}

export default CourageList;
