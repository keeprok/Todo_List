import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const actionButtonVariants = cva(
  'w-[164.35px] h-[52px] rounded-[24px] text-sm font-bold transition-colors flex items-center justify-center border-2 border-slate-900  ',
  {
    variants: {
      purpose: {
        delete: 'text-white bg-rose-600',
        complete: 'text-slate-900 bg-lime-500',
        edit: 'text-slate-900 bg-slate-200',
      },
    },
    defaultVariants: {
      purpose: 'edit',
    },
  }
);

export type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof actionButtonVariants>;

export const ActionButton = ({ purpose = 'edit' }: ActionButtonProps) => {
  const label = purpose === 'delete' ? '삭제하기' : '수정완료';

  return (
    <div className="relative w-[170px] h-[56px]">
      <div className=" absolute inset-0 bg-slate-900 rounded-[24px] translate-x-[2px] translate-y-[2px]  w-[164.35px] z-[-1]" />
      <button className={actionButtonVariants({ purpose })}>{label}</button>
    </div>
  );
};
