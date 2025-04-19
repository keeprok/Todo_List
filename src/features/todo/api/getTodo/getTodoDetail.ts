import axiosInstance from '@/lib/axiosInstance';

export const getTodoDetail = async (tenantId: string, id: number) => {
  const { data } = await axiosInstance.get(`/${tenantId}/items/${id}`);
  return data;
};
