import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/querykey';
import { getTodoList } from '../api/getTodoList';

export const useTodoList = (tenantId: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.todoList,
    queryFn: () => getTodoList(tenantId),
  });
};
