import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { PlusIcon } from '../Icons';

const baseButtonVariants = cva(
  'sm:w-[164.35px] w-[54.78px] h-[52px] rounded font-bold transition-colors  flex justify-center rounded-[24px] border-2  border-slate-900 items-center ',
  {
    variants: {
      color: {
        violet: 'bg-violet-600  px-6 py-3 text-base sm:px-4 sm:py-2 sm:text-sm',
        slate: 'bg-slate-200  px-6 py-3 text-base sm:px-4 sm:py-2 sm:text-sm',
      },
    },
    defaultVariants: {
      color: 'violet',
    },
  }
);

export type AddButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof baseButtonVariants>;

export const AddButton = ({ color }: AddButtonProps) => {
  const textColor = color === 'violet' ? 'text-white' : 'text-slate-900';
  const iconColor = color === 'violet' ? 'white' : 'black';
  return (
    <div className=" relative sm:w-[170px] h-[56px] w-[56px]">
      <div
        className={`absolute inset-0 bg-slate-900 rounded-[24px] translate-x-[2px] translate-y-[2px] z-[-1] sm:w-[164.35px] w-[54.78px] h-[52px]`}
      />
      <button className={baseButtonVariants({ color })}>
        <div className=" hidden sm:inline ">
          <div className="flex gap-1 items-center ">
            <PlusIcon color={iconColor} />
            <span className={`${textColor} font-bold `}>추가하기</span>
          </div>
        </div>
        <div className="sm:hidden flex items-center">
          <PlusIcon color={iconColor} />
        </div>
      </button>
    </div>
  );
};

// 공용 컴포넌트 자세한 내용 수정
// 추가히가 색상 구분 공용컴포넌트
