import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getLysns } from '../../api/apiLysn';

import { LYSN_PAGE_SIZE } from '../../util/constants';

export function useLysns() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const page = !searchParams.get('page') ? 1 : +searchParams.get('page');

  const { data, isLoading } = useQuery({
    queryKey: ['lysns', page],
    queryFn: () => getLysns(page),
  });

  const pageCount = Math.ceil(data?.count / LYSN_PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['lysns', page + 1],
      queryFn: () => getLysns(page + 1),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['lysns', page - 1],
      queryFn: () => getLysns(page - 1),
    });

  return { lysns: data?.lysns, count: data?.count, isLoading };
}
