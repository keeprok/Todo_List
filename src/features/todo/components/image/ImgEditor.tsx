'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

import { IconButton } from '@/components/common/button/IconButton';
import { useUploadImage } from '../../hooks/image/useUploadImage';

const tenantId = process.env.NEXT_PUBLIC_TENANT_ID!;

interface ImgEditorProps {
  onUploadSuccess: (url: string) => void;
  initialUrl?: string;
}

export const ImgEditor = ({ onUploadSuccess, initialUrl }: ImgEditorProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate: uploadImage } = useUploadImage(tenantId);
  const [imageUrl, setImageUrl] = useState<string | null>(initialUrl ?? null);

  useEffect(() => {
    setImageUrl(initialUrl ?? null);
  }, [initialUrl]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const ext = file.name.split('.').pop();
    const safeFile = new File([file], `image-${Date.now()}.${ext}`, { type: file.type });

    uploadImage(safeFile, {
      onSuccess: (url: string) => {
        setImageUrl(url);
        onUploadSuccess(url);
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

// 이미지 업로드 및 미리보기 처리
