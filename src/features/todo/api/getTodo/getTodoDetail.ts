import axiosInstance from '@/lib/axiosInstance';

export const getTodoDetail = async (tenantId: string, id: number) => {
  const { data } = await axiosInstance.get(`/${tenantId}/items/${id}`);
  return data;
};

// 단일 todo 상세 GET
