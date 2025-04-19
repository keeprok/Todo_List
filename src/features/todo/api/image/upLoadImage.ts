import axiosInstance from '@/lib/axiosInstance';

export const uploadImage = async (file: File, tenantId: string): Promise<string> => {
  const formData = new FormData();
  formData.append('image', file);

  const res = await axiosInstance.post<{ url: string }>(`/${tenantId}/images/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data.url;
};

// 이미지 업로드 POST
