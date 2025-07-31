"use client";

import ListTitle from "@/src/shared/ui/ListTitle";
import { TodoListProps } from "../../../../types/list-type";
import TodoItem from "./components/TodoItem";

const TodoList = ({
  title,
  todos,
  isChecked,
  handleCheck,
  registrationDate,
}: TodoListProps) => {
  return (
    <div
      className={`h-[350px] w-full border-none rounded-2xl p-7 shadow-lg bg-white`}
    >
      <ListTitle title={title}></ListTitle>
      <ul className="w-full py-3 flex flex-col gap-3 pt-5">
        {todos.map((v, i) => (
          <TodoItem
            key={v.id}
            todoItem={v}
            isChecked={isChecked[i] ?? false}
            handleCheck={() => handleCheck(v.id)}
            registrationDate={registrationDate}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
