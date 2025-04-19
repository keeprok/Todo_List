'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import { IconButton } from '@/components/common/button/IconButton';
import { useUploadImage } from '../../hooks/image/useUploadImage';

const tenantId = process.env.NEXT_PUBLIC_TENANT_ID!;

export const ImgEditor = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate: uploadImage } = useUploadImage(tenantId);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 파일 이름 리네이밍 처리 (권장)
    const ext = file.name.split('.').pop();
    const safeFile = new File([file], `image-${Date.now()}.${ext}`, { type: file.type });

    uploadImage(safeFile, {
      onSuccess: (url: string) => {
        console.log('✅ 업로드된 이미지 URL:', url);
        setImageUrl(url);
      },
    });
  };

  return (
    <div className="relative lg:w-[384px] h-[311px] sm:w-[696px] w-[343px] border border-dashed border-slate-300 rounded-[24px] overflow-hidden">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Uploaded"
          fill
          sizes="(max-width: 768px) 100vw, 384px"
          unoptimized
          className="object-cover rounded-[24px]"
        />
      ) : (
        <div className="w-full h-full bg-slate-50 flex items-center justify-center">
          <Image src="/img/ic/img.png" alt="placeholder" width={64} height={64} />
        </div>
      )}

      <input ref={inputRef} type="file" accept="image/*" onChange={onChange} className="hidden" />

      <div className="absolute bottom-4 right-4">
        <IconButton icon={imageUrl ? 'plus' : 'pen'} onClick={() => inputRef.current?.click()} />
      </div>
    </div>
  );
};
