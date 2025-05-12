import DiaryPost from '../components/star-home/DiaryPost';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function StaffDiaryDetail() {
  return (
    <Transition>
      <Main small>
        <DiaryPost />
      </Main>
    </Transition>
  );
}

export default StaffDiaryDetail;
