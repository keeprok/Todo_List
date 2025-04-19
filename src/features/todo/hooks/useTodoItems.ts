import { useQuery } from '@tanstack/react-query';
import { getTodoList } from '../api/getTodoList';
import { QUERY_KEYS } from '@/constants/querykey';

export const useTodoList = () => {
  return useQuery({
    queryKey: QUERY_KEYS.todoList,
    queryFn: () => getTodoList(),
  });
};
