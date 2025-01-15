import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getNote } from '../../api/apiNote';

export function useNote() {
  const { category } = useParams();
  const { data: note, isLoading } = useQuery({
    queryKey: ['note', category],
    queryFn: () => getNote(category),
  });

  return { note, isLoading };
}
