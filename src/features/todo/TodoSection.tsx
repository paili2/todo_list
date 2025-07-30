"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import AddTodo from "./components/addTodo/AddTodo";

import Header from "./components/Header";
import TodoList from "./components/todoList/TodoList";
import CompleteList from "./components/completeList/CompleteList";
import LifeQuotes from "./components/LifeQuotes";

interface SectionProps {
  className: string;
}

const TodoSection = ({ className }: SectionProps) => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const [regDate, setRegDate] = useState<Date>(new Date());

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
    setRegDate((prevDate) => new Date());
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
            registrationDate={regDate}
          ></TodoList>
          <CompleteList
            handleDelete={handleDelete}
            title={"Complete List"}
            height={"mainCard"}
            completedTodos={completedTodos}
            registrationDate={regDate}
          ></CompleteList>
        </div>
        <LifeQuotes></LifeQuotes>
      </div>
    </div>
  );
};

export default TodoSection;
