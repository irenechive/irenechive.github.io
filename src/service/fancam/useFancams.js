import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getFancams } from '../../api/apiFancam';

import { FANCAM_PAGE_SIZE } from '../../util/constants';

export function useFancams() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const page = !searchParams.get('page') ? 1 : +searchParams.get('page');

  const { data, isLoading } = useQuery({
    queryKey: ['fancams', page],
    queryFn: () => getFancams(page),
  });

  const pageCount = Math.ceil(data?.count / FANCAM_PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['fancams', page + 1],
      queryFn: () => getFancams(page + 1),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['fancams', page - 1],
      queryFn: () => getFancams(page - 1),
    });

  return { fancams: data?.fancams, count: data?.count, isLoading };
}
