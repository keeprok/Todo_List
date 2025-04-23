'use client';
import { CheckBoxIcon } from '@/components/common/Icons';
import { cn } from '@/lib/utils';

interface TodoDetailItemProps {
  id: number;
  name: string;
  isCompleted: boolean;
  onToggle: () => void;
  onChangeName: (val: string) => void;
}

export const TodoDetailItem = ({ name, isCompleted, onToggle, onChangeName }: TodoDetailItemProps) => {
  return (
    <div
      className={cn(
        'w-full h-[64px] rounded-[27px] border-2 flex justify-center items-center',
        isCompleted ? 'bg-violet-100 ' : 'bg-white '
      )}
    >
      <button onClick={onToggle} className="cursor-pointer flex gap-4">
        <CheckBoxIcon checked={isCompleted} />
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => onChangeName(e.target.value)}
        className="text-slate-900 underline text-xl font-bold bg-transparent outline-none"
      />
    </div>
  );
};

// 상세 페이지 상단의 이름/체크 표시 영역
