import axiosInstance from '@/lib/axiosInstance';

export const deleteTodo = async (tenantId: string, id: number) => {
  const { data } = await axiosInstance.delete(`/${tenantId}/items/${id}`);
  return data;
};
