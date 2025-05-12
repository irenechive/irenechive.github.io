import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getStory } from '../../api/apiInstagram';

export function useStory() {
  const { id } = useParams();

  const { data: story, isLoading } = useQuery({
    queryKey: ['story', id],
    queryFn: () => getStory(id),
  });

  return { story, isLoading };
}
