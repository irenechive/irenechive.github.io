import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getDiaries } from '../../api/apiStar';

import { STAR_PAGE_SIZE } from '../../util/constants';

export function useDiaries() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const page = !searchParams.get('page') ? 1 : +searchParams.get('page');

  const { data, isLoading } = useQuery({
    queryKey: ['staff_diaries', page],
    queryFn: () => getDiaries(page),
  });

  const pageCount = Math.ceil(data?.count / STAR_PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['staff_diaries', page + 1],
      queryFn: () => getDiaries(page + 1),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['staff_diaries', page - 1],
      queryFn: () => getDiaries(page - 1),
    });

  return { diaries: data?.diaries, count: data?.count, isLoading };
}
