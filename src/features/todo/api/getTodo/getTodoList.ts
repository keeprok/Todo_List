import axiosInstance from '@/lib/axiosInstance';

export interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

export const getTodoList = async (): Promise<TodoItem[]> => {
  const tenantId = process.env.NEXT_PUBLIC_TENANT_ID!;
  const res = await axiosInstance.get(`/${tenantId}/items`);
  return res.data;
};
