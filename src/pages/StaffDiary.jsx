import DiaryList from '../components/star-home/DiaryList';
import Main from '../UI/Main';
import Transition from '../UI/Transition';

function StaffDiary() {
  return (
    <Transition>
      <Main>
        <DiaryList />
      </Main>
    </Transition>
  );
}

export default StaffDiary;
