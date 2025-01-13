import { useQuery } from '@tanstack/react-query';

import { getNotice } from '../../api/apiNotice';

export function useNotice() {
  const { data: notice, isLoading } = useQuery({
    queryKey: ['notice'],
    queryFn: getNotice,
  });

  return { notice, isLoading };
}
