'use client';

import { useParams } from 'next/navigation';

import { TodoDetailItem } from '../components/detail/TodoDetailItem';
import { TodoDetialEditer } from '../components/detail/TodoDetailEditor';
import { useTodoDetail } from '../hooks/useTodoDetail';

const tenantId = process.env.NEXT_PUBLIC_TENANT_ID!;

export const TodoDetailContainer = () => {
  const { id } = useParams();
  const todoId = Number(id);

  const { data } = useTodoDetail(tenantId, todoId);

  if (!data) return null;

  return (
    <div className="flex-col gap-[17px] sm:gap-6">
      <TodoDetailItem id={data.id} name={data.name} isCompleted={data.isCompleted} onToggle={() => {}} />
      <TodoDetialEditer
        id={data.id}
        name={data.name}
        memo={data.memo}
        imageUrl={data.imageUrl}
        isCompleted={data.isCompleted}
      />
    </div>
  );
};

// 상세 페이지 뷰 전체를 담당
