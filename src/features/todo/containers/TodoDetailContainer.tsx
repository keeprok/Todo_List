'use client';

import { TodoDetialEditer } from '../components/detail/TodoDetailEditor';
import { TodoDetailItem } from '../components/detail/TodoDetailItem';

export const TodoDetailContainer = () => {
  const data = { id: 3, name: '1string', isCompleted: false, onToggle: () => console.log(1) };

  return (
    <div className=" flex-col gap-[17px] sm:gap-6">
      <TodoDetailItem
        key={data.id}
        id={data.id}
        name={data.name}
        isCompleted={data.isCompleted}
        onToggle={data.onToggle}
      />
      <TodoDetialEditer />
    </div>
  );
};
