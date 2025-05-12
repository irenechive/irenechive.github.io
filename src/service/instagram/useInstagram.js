import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getInstagram } from '../../api/apiInstagram';

export function useInstagram() {
  const { id } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ['instagram_post', id],
    queryFn: () => getInstagram(id),
  });

  return { post, isLoading };
}
