import { useMutation } from '@tanstack/react-query';
import { deleteTodo } from '../api/deleteTodo';

export const useDeleteTodo = (tenantId: string, id: number) => {
  return useMutation({
    mutationFn: () => deleteTodo(tenantId, id),
  });
};
