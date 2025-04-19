'use client';
import Image from 'next/image';
import { TodoItem } from './TodoItem';
import { useTodoList } from '../../hooks/useTodoItems';

export const TodoList = () => {
  const { data, isLoading, isError } = useTodoList();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러 발생</div>;
  const todoList = data?.filter((item) => !item.isCompleted) ?? [];
  const doneList = data?.filter((item) => item.isCompleted) ?? [];
  console.log(data);
  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-between w-full ">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Image src="/img/todo.png" alt="logo" width={101} height={36} priority />
        {todoList.length > 0 ? (
          todoList.map((data) => (
            <TodoItem key={data.id} id={data.id} name={data.name} isCompleted={data.isCompleted} />
          ))
        ) : (
          <div
            className={`w-full  flex flex-col items-center justify-center pt-16 ${
              todoList ? 'gap-4 lg:gap-[14px]' : ' lg:gap-16'
            }`}
          >
            <Image src="/img/empty/baseBig.png" alt="할 일이 없어요" width={240} height={240} priority />
            <p className=" text-center font-bold text-slate-400 leading-relaxed">
              할 일이 없어요.
              <br />
              TODO 를 새롭게 추가해주세요!
            </p>
          </div>
        )}
      </div>
      <div className={`w-full lg:w-1/2 flex flex-col ${doneList ? 'gap-4 lg:gap-[14px]' : 'gap-0 sm:gap-6 lg:gap-16'}`}>
        <Image src="/img/done.png" alt="logo" width={97} height={36} priority />
        {doneList.length > 0 ? (
          doneList.map((data) => (
            <TodoItem key={data.id} id={data.id} name={data.name} isCompleted={data.isCompleted} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center pt-16 text-slate-400 gap-6 ">
            <Image src="/img/empty/smileBig.png" alt="아직 다 한 일이 없어요" width={240} height={240} priority />
            <p className=" text-center font-bold text-slate-400 leading-relaxed">
              아직 다 한 일이 없어요.
              <br />
              해야 할 일을 체크해보세요!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
