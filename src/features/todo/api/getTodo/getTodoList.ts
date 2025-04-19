import axiosInstance from '@/lib/axiosInstance';

export interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

export const getTodoList = async (tenantId: string): Promise<TodoItem[]> => {
  const res = await axiosInstance.get(`/${tenantId}/items`);
  return res.data;
};

// 전체 todo 리스트 GET
