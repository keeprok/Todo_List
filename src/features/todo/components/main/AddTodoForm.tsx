'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AddButton } from '@/components/common/button/AddButton';
import { useRouter } from 'next/navigation';
import { usePostTodo } from '../../hooks/usePostTodo';

const tenantId = process.env.NEXT_PUBLIC_TENANT_ID!;

export const AddTodoForm = () => {
  const [value, setValue] = useState('');
  const router = useRouter();
  const { mutate: postTodo } = usePostTodo(tenantId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!value.trim()) {
      alert('이름이 비어있습니다!');
      return;
    }

    postTodo(
      { name: value },
      {
        onSuccess: (data) => {
          console.log('[생성성공', data);
          router.push(`/detail/${data.id}`);
        },
        onError: (error) => {
          console.error('생성실패', error);
        },
      }
    );

    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full overflow-hidden flex gap-4">
      <div className="relative w-full overflow-hidden h-[56px] bg-transparent">
        <Image src="/img/search.png" alt="addTodo 배경" fill className="object-cover" priority />
        <div className="absolute inset-0 flex flex-col items-center px-22 gap-4">
          <input
            type="text"
            name="todo"
            placeholder="할 일을 입력해주세요"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full h-[56px] px-6 text-slate-900 placeholder:text-slate-500 whitespace-nowrap overflow-x-auto outline-none"
          />
        </div>
      </div>

      <AddButton type="submit" disabled={!value.trim()} />
    </form>
  );
};

// name 입력 후 /add로 이동하는 Form
