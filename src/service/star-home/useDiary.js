import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getDiary } from '../../api/apiStar';

export function useDiary() {
  const { id } = useParams();

  const { data: diary, isLoading } = useQuery({
    queryKey: ['staff_diary', id],
    queryFn: () => getDiary(id),
  });

  return { diary, isLoading };
}
