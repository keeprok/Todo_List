'use client';
import { CheckBoxIcon } from '@/components/common/Icons';
import { cn } from '@/lib/utils';

interface TodoDetailItemProps {
  id: number;
  name: string;
  isCompleted: boolean;
  onToggle: () => void;
}

export const TodoDetailItem = ({ name, isCompleted, onToggle }: TodoDetailItemProps) => {
  return (
    <div
      className={cn(
        'w-full h-[64px] rounded-[27px] border-2 flex justify-center items-center',
        isCompleted ? 'bg-violet-100 ' : 'bg-white '
      )}
    >
      <button onClick={onToggle} className="cursor-pointer flex gap-4">
        <CheckBoxIcon checked={isCompleted} />
        <span className="text-slate-900 underline text-xl font-bold">{name}</span>
      </button>
    </div>
  );
};
