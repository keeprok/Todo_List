'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ActionButton } from '@/components/common/button/AcctionButton';
import { ImgEditor } from '../image/ImgEditor';
import { MemoEditor } from './MemoEditor';
import { usePatchTodo } from '../../hooks/usePatchTodo';
import { useDeleteTodo } from '../../hooks/useDeleteTodo';

const tenantId = process.env.NEXT_PUBLIC_TENANT_ID!;

interface Props {
  id: number;
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted: boolean;
}

export const TodoDetialEditer = ({ id, name, memo = '', imageUrl = '', isCompleted }: Props) => {
  const [newMemo, setMemo] = useState(memo);
  const [newImage, setImage] = useState<string | undefined>(imageUrl);

  const router = useRouter();
  const { mutate: patch } = usePatchTodo(tenantId, id);
  const { mutate: deleteTodo } = useDeleteTodo(tenantId, id);

  const handleEdit = () => {
    patch(
      { name, memo: newMemo, imageUrl: newImage, isCompleted },
      {
        onSuccess: () => {
          router.push('/');
        },
      }
    );
  };

  const handleDelete = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      deleteTodo(undefined, {
        onSuccess: () => {
          router.push('/');
        },
      });
    }
  };

  // 내부 useState 아래
  const hasInitialContent = Boolean(memo || imageUrl);
  const editLabel = hasInitialContent ? 'edit' : 'complete';

  return (
    <div className="flex flex-col gap-6 pt-[17px] sm:pt-6">
      <div className="flex flex-col gap-[17px] sm:gap-6 lg:flex-row">
        <ImgEditor onUploadSuccess={setImage} initialUrl={newImage} />
        <MemoEditor value={newMemo} onChange={setMemo} />
      </div>
      <div className="w-full justify-center lg:justify-end flex gap-[7px] sm:gap-4">
        <ActionButton purpose={editLabel} onClick={handleEdit} />
        <ActionButton purpose="delete" onClick={handleDelete} />
      </div>
    </div>
  );
};

// 이미지, 메모, 수정/삭제 액션 모음
