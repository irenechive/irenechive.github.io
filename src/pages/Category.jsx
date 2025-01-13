import { useParams } from 'react-router-dom';

import Contents from './Contents';
import Fancam from './Fancam';
import FromStar from './FromStar';
import Lysn from './Lysn';
import Notice from './Notice';
import RedVelvet from './RedVelvet';
import Rookies from './Rookies';
import StaffDiary from './StaffDiary';
import Stories from './Stories';

function Category() {
  const { category } = useParams();

  if (category === 'contents') return <Contents />;
  if (category === 'diary') return <StaffDiary />;
  if (category === 'fancam') return <Fancam />;
  if (category === 'from') return <FromStar />;
  if (category === 'instagram') return <RedVelvet />;
  if (category === 'lysn') return <Lysn />;
  if (category === 'notice') return <Notice />;
  if (category === 'rookies') return <Rookies />;
  if (category === 'stories') return <Stories />;
}

export default Category;
