import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getRookie } from '../../api/apiRookies';

export function useRookie() {
  const { id } = useParams();

  const { data: rookie, isLoading } = useQuery({
    queryKey: ['rookie', id],
    queryFn: () => getRookie(id),
  });

  return { rookie, isLoading };
}
