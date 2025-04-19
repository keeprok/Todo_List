import { useQuery } from '@tanstack/react-query';
import { getTodoDetail } from '../api/getTodo/getTodoDetail';

export const useTodoDetail = (tenantId: string, id: number) => {
  return useQuery({
    queryKey: ['todo', id],
    queryFn: () => getTodoDetail(tenantId, id),
  });
};
