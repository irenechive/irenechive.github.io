import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getFancam } from '../../api/apiFancam';

export function useFancam() {
  const { id } = useParams();

  const { data: fancam, isLoading } = useQuery({
    queryKey: ['fancam', id],
    queryFn: () => getFancam(id),
  });

  return { fancam, isLoading };
}
