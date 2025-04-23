'use client';

import { useParams } from 'next/navigation';

import { TodoDetailItem } from '../components/detail/TodoDetailItem';
import { TodoDetialEditer } from '../components/detail/TodoDetailEditor';
import { useTodoDetail } from '../hooks/useTodoDetail';
import { useEffect, useState } from 'react';

const tenantId = process.env.NEXT_PUBLIC_TENANT_ID!;

export const TodoDetailContainer = () => {
  const { id } = useParams();
  const todoId = Number(id);
  const { data, isLoading } = useTodoDetail(tenantId, todoId);

  const [name, setName] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  useEffect(() => {
    if (data) {
      setName(data.name);
      setIsCompleted(data.isCompleted);
    }
  }, [data]);
  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div className="flex-col gap-[17px] sm:gap-6 ">
      <TodoDetailItem
        id={data.id}
        name={name}
        isCompleted={isCompleted}
        onToggle={() => setIsCompleted((prev: boolean) => !prev)}
        onChangeName={setName}
      />
      <TodoDetialEditer
        id={data.id}
        name={name}
        memo={data.memo}
        imageUrl={data.imageUrl}
        isCompleted={data.isCompleted}
      />
    </div>
  );
};

// 상세 페이지 뷰 전체를 담당
