import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getLysn } from '../../api/apiLysn';

export function useLysn() {
  const { id } = useParams();

  const { data: lysn, isLoading } = useQuery({
    queryKey: ['lysn', id],
    queryFn: () => getLysn(id),
  });

  return { lysn, isLoading };
}
