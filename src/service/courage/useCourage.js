import { useQuery } from '@tanstack/react-query';
import { getCourage } from '../../api/apiCourage';

export function useCourage() {
  const { data: courage, isLoading } = useQuery({
    queryKey: ['courage'],
    queryFn: getCourage,
  });

  return { courage, isLoading };
}
