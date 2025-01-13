import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getFromStars } from '../../api/apiStar';

import { STAR_PAGE_SIZE } from '../../util/constants';

export function useFromStars() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const page = !searchParams.get('page') ? 1 : +searchParams.get('page');
  const filter = !searchParams.get('filter') ? 'irene' : searchParams.get('filter');

  const { data, isLoading } = useQuery({
    queryKey: ['from_stars', page, filter],
    queryFn: () => getFromStars({ page, filter }),
  });

  const pageCount = Math.ceil(data?.count / STAR_PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['from_stars', page + 1, filter],
      queryFn: () => getFromStars({ page: page + 1, filter }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['from_stars', page - 1, filter],
      queryFn: () => getFromStars({ page: page - 1, filter }),
    });

  return { from_stars: data?.from_stars, count: data?.count, isLoading };
}
