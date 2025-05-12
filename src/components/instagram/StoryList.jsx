import { useStories } from '../../service/instagram/useStories';
import Loader from '../../UI/Loader';
import { FEED_PAGE_SIZE } from '../../util/constants';
import Pagination from '../Pagination';
import StoryItem from './StoryItem';
import styles from './StoryList.module.css';

function StoryList() {
  const { stories, count, isLoading } = useStories();

  if (isLoading) return <Loader />;

  return (
    <>
      <p className={styles.searchlist}>
        총 <strong>{count}</strong>개의 게시물
      </p>
      <ul id={styles.stories}>
        {stories.map(story => (
          <StoryItem key={story.id} story={story} />
        ))}
      </ul>
      <Pagination count={count} size={FEED_PAGE_SIZE} />
    </>
  );
}

export default StoryList;
