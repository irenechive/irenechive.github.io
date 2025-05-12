import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getTweets } from '../../api/apiTwitter';

import { TWEET_PAGE_SIZE } from '../../util/constants';

export function useTweets() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const page = !searchParams.get('page') ? 1 : +searchParams.get('page');
  const filter = !searchParams.get('filter') ? 'irene' : searchParams.get('filter');
  const member = searchParams.get('member');
  const year = searchParams.get('year');
  const era = searchParams.get('era');

  const { data, isLoading } = useQuery({
    queryKey: ['tweets', page, filter, member, year, era],
    queryFn: () => getTweets({ page, filter, member, year, era }),
  });

  const pageCount = Math.ceil(data?.count / TWEET_PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['tweets', page + 1, filter, member, year, era],
      queryFn: () => getTweets({ page: page + 1, filter, member, year, era }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['tweets', page - 1, filter, member, year, era],
      queryFn: () => getTweets({ page: page - 1, filter, member, year, era }),
    });

  return { tweets: data?.tweets, count: data?.count, isLoading };
}
