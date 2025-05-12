import { useQuery } from '@tanstack/react-query';

import { getRookies } from '../../api/apiRookies';

export function useRookies() {
  const { data: rookies, isLoading } = useQuery({
    queryKey: ['rookies'],
    queryFn: getRookies,
  });

  return { rookies, isLoading };
}
