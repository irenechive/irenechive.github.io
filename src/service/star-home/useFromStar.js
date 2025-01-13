import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getFromStar } from '../../api/apiStar';

export function useFromStar() {
  const { id } = useParams();

  const { data: from_star, isLoading } = useQuery({
    queryKey: ['from_star', id],
    queryFn: () => getFromStar(id),
  });

  return { from_star, isLoading };
}
