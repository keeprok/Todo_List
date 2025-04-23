import { AddTodoForm } from '@/features/todo/components/main/AddTodoForm';
import { TodoList } from '@/features/todo/components/main/TodoList';

export default function TodoPage() {
  return (
    <main className="max-w-[1200px] px-4 sm:px-6 lg:mx-auto pt-6 flex justify-center  flex-col gap-10">
      <AddTodoForm />
      <TodoList />
    </main>
  );
}
// 메인 페이지: AddTodoForm 및 TodoList 렌더링 + todo (제목만으로)추가
