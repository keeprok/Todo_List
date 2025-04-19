'use client';
import { CheckBoxIcon } from '@/components/common/Icons';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

interface TodoItemProps {
  id: number;
  name: string;
  isCompleted: boolean;
  onToggle: () => void;
}

export const TodoItem = ({ id, name, isCompleted, onToggle }: TodoItemProps) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        'w-full h-[56px] rounded-[27px] border-2 pl-[10px] flex items-center ',
        isCompleted ? 'bg-violet-100 ' : 'bg-white '
      )}
    >
      <div className="flex gap-[16px]">
        <button onClick={onToggle} className="cursor-pointer">
          <CheckBoxIcon checked={isCompleted} />
        </button>
        <button onClick={() => router.push(`/detail/${id}`)} className=" cursor-pointer">
          <span className={clsx('text-slate-800 ', { 'line-through': isCompleted })}>{name}</span>
        </button>
      </div>
    </div>
  );
};
