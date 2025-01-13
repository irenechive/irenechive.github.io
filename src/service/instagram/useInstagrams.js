import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getInstagrams } from '../../api/apiInstagram';

import { FEED_PAGE_SIZE } from '../../util/constants';

export function useInstagrams() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const page = !searchParams.get('page') ? 1 : +searchParams.get('page');
  const filter = !searchParams.get('filter') ? 'irene' : searchParams.get('filter');
  const member = searchParams.get('member');
  const year = searchParams.get('year');

  const { data, isLoading } = useQuery({
    queryKey: ['instagram_feed', page, filter, member, year],
    queryFn: () => getInstagrams({ page, filter, member, year }),
  });

  const pageCount = Math.ceil(data?.count / FEED_PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['instagram_feed', page + 1, filter, member, year],
      queryFn: () => getInstagrams({ page: page + 1, filter, member, year }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['instagram_feed', page - 1, filter, member, year],
      queryFn: () => getInstagrams({ page: page - 1, filter, member, year }),
    });

  return { feed: data?.feed, count: data?.count, isLoading };
}
