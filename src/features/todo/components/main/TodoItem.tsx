'use client';
import { CheckBoxIcon } from '@/components/common/Icons';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

import { usePatchTodo } from '../../hooks/usePatchTodo';
import { useQueryClient } from '@tanstack/react-query';

interface TodoItemProps {
  id: number;
  name: string;
  isCompleted: boolean;
}

const tenantId = process.env.NEXT_PUBLIC_TENANT_ID!;

export const TodoItem = ({ id, name, isCompleted }: TodoItemProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: patchTodo } = usePatchTodo(tenantId, id);
  const handleToggle = () => {
    patchTodo(
      { name, isCompleted: !isCompleted },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['todoList'] });
        },
      }
    );
    router.push('/');
  };
  return (
    <div
      className={cn(
        'w-full h-[56px] rounded-[27px] border-2 pl-[10px] flex items-center ',
        isCompleted ? 'bg-violet-100 ' : 'bg-white '
      )}
    >
      <div className="flex gap-[16px]">
        <button className="cursor-pointer" onClick={handleToggle}>
          <CheckBoxIcon checked={isCompleted} />
        </button>
        <button onClick={() => router.push(`/detail/${id}`)} className=" cursor-pointer">
          <span className={clsx('text-slate-800 ', { 'line-through': isCompleted })}>{name}</span>
        </button>
      </div>
    </div>
  );
};

// 개별 todo 아이템 (클릭 시 상세로 이동)
