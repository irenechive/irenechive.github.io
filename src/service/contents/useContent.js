import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getContent } from '../../api/apiContent';

export function useContent() {
  const { id } = useParams();

  const { data: content, isLoading } = useQuery({
    queryKey: ['content', id],
    queryFn: () => getContent(id),
  });

  return { content, isLoading };
}
