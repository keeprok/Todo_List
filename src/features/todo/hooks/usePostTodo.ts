import { useMutation } from '@tanstack/react-query';
import { postTodo } from '../api/postTodo';

interface PostTodoRequest {
  name: string;
  memo?: string;
  imageUrl?: string;
}

export const usePostTodo = (tenantId: string) => {
  return useMutation({
    mutationFn: (data: PostTodoRequest) => postTodo(tenantId, data),
  });
};
