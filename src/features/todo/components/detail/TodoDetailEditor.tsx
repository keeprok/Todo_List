'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { ImgEditor } from '../image/ImgEditor';
import { MemoEditor } from './MemoEditor';
import { usePatchTodo } from '../../hooks/usePatchTodo';
import { useDeleteTodo } from '../../hooks/useDeleteTodo';
import { ActionButton } from '@/components/common/button/AcctionButton';
import { useQueryClient } from '@tanstack/react-query';

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

  const queryClient = useQueryClient();

  const router = useRouter();
  const { mutate: patch } = usePatchTodo(tenantId, id);
  const { mutate: deleteTodo } = useDeleteTodo(tenantId, id);

  useEffect(() => {
    setMemo(memo ?? '');
    setImage(imageUrl);
  }, [memo, imageUrl]);

  const handleEdit = () => {
    patch(
      { name, memo: newMemo ?? '', imageUrl: newImage ?? '', isCompleted },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['todo', id] });
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

  const isMemoChanged = (newMemo ?? '') !== (memo ?? '');
  const isImageChanged = (newImage ?? '') !== (imageUrl ?? '');
  const hasEditedContent = isMemoChanged || isImageChanged;
  const editLabel = hasEditedContent ? 'complete' : 'edit';
  return (
    <div className="flex flex-col gap-6 pt-[17px] sm:pt-6">
      <div className="flex flex-col gap-[17px] sm:gap-6 lg:flex-row items-center">
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
