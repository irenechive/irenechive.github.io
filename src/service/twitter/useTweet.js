import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getTweet } from '../../api/apiTwitter';

export function useTweet() {
  const { id } = useParams();

  const { data: tweet, isLoading } = useQuery({
    queryKey: ['tweet', id],
    queryFn: () => getTweet(id),
  });

  return { tweet, isLoading };
}
