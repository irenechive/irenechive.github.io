import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getContents } from '../../api/apiContent';

import { CONTENT_PAGE_SIZE } from '../../util/constants';

export function useContents() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const page = !searchParams.get('page') ? 1 : +searchParams.get('page');

  const { data, isLoading } = useQuery({
    queryKey: ['contents', page],
    queryFn: () => getContents(page),
  });

  const pageCount = Math.ceil(data?.count / CONTENT_PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['contents', page + 1],
      queryFn: () => getContents(page + 1),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['contents', page - 1],
      queryFn: () => getContents(page - 1),
    });

  return { contents: data?.contents, count: data?.count, isLoading };
}
