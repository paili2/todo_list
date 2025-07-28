"use client";

import ListTitle from "@/src/shared/ui/ListTitle";
import { TodoListProps } from "../../../../types/list-type";
import TodoItem from "./components/TodoItem";

const TodoList = ({
  title,
  height,
  todos,
  isChecked,
  handleCheck,
}: TodoListProps) => {
  const cardType = { mainCard: "h-[350px]", etcCard: "h-[150px]" };

  return (
    <div
      className={`${cardType[height]} w-full border-none rounded-2xl p-7 shadow-lg bg-white`}
    >
      <ListTitle title={title}></ListTitle>
      <ul className="w-full py-3 flex flex-col gap-3 pt-5">
        {todos.map((v, i) => (
          <TodoItem
            key={i}
            todo={v}
            isChecked={isChecked[i] ?? false}
            handleCheck={() => handleCheck(i)}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
