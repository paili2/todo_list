"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import AddTodo from "./widget/addTodo/AddTodo";

import Header from "./widget/Header";
import TodoList from "./widget/todoList/TodoList";
import CompleteList from "./widget/completeList/CompleteList";

interface SectionProps {
  className: string;
}

const TodoSection = ({ className }: SectionProps) => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const [completedTodos, setCompletedTodos] = useState<string[]>([]);

  const [isChecked, setIsChecked] = useState<boolean[]>([]);
  const handleCheck = (index: number) => {
    const completedItem = todos[index];
    setCompletedTodos((prev) => [...prev, completedItem]);
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    setIsChecked((prevChecked) => prevChecked.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.trim()) return;
    setTodos((prevTodos) => [...prevTodos, todo]);
    setIsChecked((prevChecked) => [...prevChecked, false]);
    setTodo("");
  };

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleDelete = (index: number) => {
    setCompletedTodos((prev) =>
      prev.filter((v, i) => (i === index ? null : v))
    );
  };

  return (
    <div className={`${className} bg-blue-50`}>
      <div className="w-full max-w-[1300px] max-h-screen mx-auto flex flex-col gap-5 p-10">
        <Header></Header>
        <AddTodo
          handleSubmit={handleSubmit}
          handleTodoChange={handleTodoChange}
          value={todo}
        ></AddTodo>
        <div className="flex gap-5">
          <TodoList
            title={"Todo List"}
            height={"mainCard"}
            todos={todos}
            isChecked={isChecked}
            handleCheck={handleCheck}
          ></TodoList>
          <CompleteList
            handleDelete={handleDelete}
            title={"Complete List"}
            height={"mainCard"}
            completedTodos={completedTodos}
          ></CompleteList>
        </div>
        {/* <ListCard
          title={"Life Quotes"}
          height={"etcCard"}
          isChecked={isChecked}
          handleCheck={handleCheck}
        ></ListCard> */}
      </div>
    </div>
  );
};

export default TodoSection;
