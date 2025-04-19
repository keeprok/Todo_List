import axiosInstance from '@/lib/axiosInstance';

export const uploadImage = async (formData: FormData, tenantId: string): Promise<string> => {
  const response = await axiosInstance.post<{ imageUrl: string }>(`/api/${tenantId}/images/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data.imageUrl;
};
