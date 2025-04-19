import { TodoDetailContainer } from '@/features/todo/containers/TodoDetailContainer';

export default function DetailPage() {
  return (
    <div className="pt-4 sm:pt-6 px-4 sm:px-6 lg:px-[104px]">
      <TodoDetailContainer />
    </div>
  );
}
// 상세 페이지: 특정 todo 상세 조회 및 수정/삭제
