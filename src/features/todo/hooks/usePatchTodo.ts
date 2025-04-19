import { useMutation } from '@tanstack/react-query';
import { patchTodo } from '../api/patchTodo';

interface usePatchTodoProps {
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted: boolean;
}

export const usePatchTodo = (tenantId: string, id: number) => {
  return useMutation({
    mutationFn: (data: usePatchTodoProps) => patchTodo(tenantId, id, data),
  });
};
