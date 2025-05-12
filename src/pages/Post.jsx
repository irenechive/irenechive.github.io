import { useParams } from 'react-router-dom';

import ContentsDetail from './ContentsDetail';
import FancamDetail from './FancamDetail';
import FromStarDetail from './FromStarDetail';
import InstagramDetail from './InstagramDetail';
import LysnDetail from './LysnDetail';
import RookiesDetail from './RookiesDetail';
import StaffDiaryDetail from './StaffDiaryDetail';
import StoriesDetail from './StoriesDetail';
import TweetDetail from './TweetDetail';

function Post() {
  const { category } = useParams();

  if (category === 'contents') return <ContentsDetail />;
  if (category === 'diary') return <StaffDiaryDetail />;
  if (category === 'fancam') return <FancamDetail />;
  if (category === 'from') return <FromStarDetail />;
  if (category === 'instagram') return <InstagramDetail account="redvelvet.smtown" />;
  if (category === 'lysn') return <LysnDetail />;
  if (category === 'rookies') return <RookiesDetail />;
  if (category === 'stories') return <StoriesDetail account="renebaebae" />;
  if (category === 'twitter') return <TweetDetail />;
}

export default Post;
