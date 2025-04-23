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
    <form onSubmit={handleSubmit} className="w-full  flex  sm:flex gap-4  h-14">
      <div className="relative w-full h-full  min-w-0">
        <Image src="/img/search.png" alt="addTodo 배경" fill sizes="100vw " className="object-cover" priority />

        <input
          type="text"
          name="todo"
          placeholder="할 일을 입력해주세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="absolute inset-0 w-full h-full px-6 bg-transparent text-slate-900 placeholder:text-slate-500 outline-none"
        />
      </div>

      <AddButton type="submit" disabled={!value.trim()} color={value.trim() ? 'violet' : 'slate'} />
    </form>
  );
};

// name 입력 후 /add로 이동하는 Form
