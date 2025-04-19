import axiosInstance from '@/lib/axiosInstance';

export const patchTodo = async ({
  id,
  isCompleted,
  tenantId,
}: {
  id: number;
  isCompleted: boolean;
  tenantId: string;
}) => {
  const res = await axiosInstance.patch(`/api/${tenantId}/items/${id}`, {
    isCompleted,
  });
  return res.data;
};
