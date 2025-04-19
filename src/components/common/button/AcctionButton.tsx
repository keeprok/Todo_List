import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const actionButtonVariants = cva('rounded  text-sm font-bold transition-colors w-[168px] h-[56px] cursor-pointer', {
  variants: {
    purpose: {
      delete: ' text-white bg-rose-600',
      complete: 'text-slate-900   bg-lime-500',
      edit: ' text-slate-900 bg-slate-200',
    },
  },
  defaultVariants: {
    purpose: 'edit',
  },
});

export type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof actionButtonVariants>;

export const ActionButton = ({ purpose, children, ...rest }: ActionButtonProps) => {
  return (
    <button className={actionButtonVariants({ purpose })} {...rest}>
      {children}
    </button>
  );
};
