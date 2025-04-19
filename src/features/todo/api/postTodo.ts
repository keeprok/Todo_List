import axiosInstance from '@/lib/axiosInstance';

interface PostTodoProps {
  name: string;
  memo?: string;
  imageUrl?: string;
}

interface PostTodoResponse {
  id: number;
  tenantId: string;
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}

export const postTodo = async (tenantId: string, data: PostTodoProps): Promise<PostTodoResponse> => {
  const res = await axiosInstance.post<PostTodoResponse>(`/${tenantId}/items`, data);
  console.log(res.data);
  return res.data;
};

// todo 생성 POST
