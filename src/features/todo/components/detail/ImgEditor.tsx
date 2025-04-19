import { IconButton } from '@/components/common/button/IconButton';
import Image from 'next/image';

export const ImgEditor = () => {
  return (
    <div className="relative w-full lg:w-[384px] h-[311px] bg-slate-50 border border-dashed border-slate-300 rounded-[24px] flex items-center justify-center">
      <Image src="/img/ic/img.png" alt="logo" width={64} height={64} priority />
      <div className="absolute bottom-4 right-4 ">
        <IconButton icon="plus" />
      </div>
    </div>
  );
};
