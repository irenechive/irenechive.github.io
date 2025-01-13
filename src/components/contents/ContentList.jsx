import Pagination from '../Pagination';
import Loader from '../../UI/Loader';

import ContentItem from './ContentItem';

import { useContents } from '../../service/contents/useContents';

import { CONTENT_PAGE_SIZE } from '../../util/constants';

import styles from './ContentList.module.css';

function ContentList() {
  const { contents, count, isLoading } = useContents();

  if (isLoading) return <Loader />;

  return (
    <>
      <p className={styles.searchlist}>
        총 <strong>{count}</strong>개의 게시물
      </p>
      <ul id={styles.contents}>
        {contents.map(content => (
          <ContentItem key={content.id} content={content} />
        ))}
      </ul>
      <Pagination count={count} size={CONTENT_PAGE_SIZE} />
    </>
  );
}

export default ContentList;
