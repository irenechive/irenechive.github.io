import { useQuery } from '@tanstack/react-query';

import { getAccount } from '../../api/apiAccount';

export function useAccount() {
  const { data: account, isLoading } = useQuery({
    queryKey: ['account'],
    queryFn: getAccount,
  });

  return { account, isLoading };
}
