import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getStories } from '../../api/apiInstagram';

import { FEED_PAGE_SIZE } from '../../util/constants';

export function useStories() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const page = !searchParams.get('page') ? 1 : +searchParams.get('page');

  const { data, isLoading } = useQuery({
    queryKey: ['stroies', page],
    queryFn: () => getStories(page),
  });

  const pageCount = Math.ceil(data?.count / FEED_PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['stroies', page + 1],
      queryFn: () => getStories(page + 1),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['stroies', page - 1],
      queryFn: () => getStories(page - 1),
    });

  return { stories: data?.stories, count: data?.count, isLoading };
}
