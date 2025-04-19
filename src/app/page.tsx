import { AddTodoForm } from '@/features/todo/components/main/AddTodoForm';
import { TodoList } from '@/features/todo/components/main/TodoList';

export default function TodoPage() {
  return (
    <main className="  max-w-[1200px] mx-auto pt-6 flex justify-center ">
      <div className="flex flex-col gap-10 w-full">
        <AddTodoForm />
        <TodoList />
      </div>
    </main>
  );
}
