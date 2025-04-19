import { useMutation } from '@tanstack/react-query';
import { uploadImage } from '../../api/image/upLoadImage';

export const useUploadImage = (tenantId: string) => {
  return useMutation({
    mutationFn: (file: File) => {
      return uploadImage(file, tenantId);
    },
  });
};
