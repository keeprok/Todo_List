import axiosInstance from '@/lib/axiosInstance';

interface patchTodoprops {
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted: boolean;
}

export const patchTodo = async (tenantId: string, id: number, data: patchTodoprops) => {
  const res = await axiosInstance.patch(`/${tenantId}/items/${id}`, data);
  return res.data;
};

// todo 수정 PATCH
