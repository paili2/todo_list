"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import AddTodo from "./components/addTodo/AddTodo";

import Header from "./components/Header";
import TodoList from "./components/todoList/TodoList";
import CompleteList from "./components/completeList/CompleteList";
import LifeQuotes from "./components/LifeQuotes";
import axiosInstance from "@/src/shared/lib/axiosInstance";
import { SectionProps, Todo } from "@/src/types/list-type";

const TodoSection = ({ className }: SectionProps) => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [regDate, setRegDate] = useState<Date>(new Date());
  const incomplete = todos.filter((t) => !t.completed);
  const completed = todos.filter((t) => t.completed);
  const [isChecked, setIsChecked] = useState<boolean[]>([]);

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  // ✅ 1. 투두 목록 가져오기
  const fetchTodos = async () => {
    try {
      const res = await axiosInstance.get("/todos");
      setTodos(res.data);
    } catch (error) {
      console.error("투두 불러오기 실패:", error);
    }
  };

  // ✅ 2. 투두 추가하기
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.trim()) {
      alert("내용을 입력해주세요!");
      return;
    }
    try {
      const res = await axiosInstance.post("/todos", { title: todo });
      setTodos((prev) => [...prev, res.data]);
      setTodo("");
    } catch (error) {
      console.error("투두 추가 실패:", error);
    }
  };

  // ✅ 3. 투두 체크(완료) -> completedTodos로 이동
  const handleCheck = async (id: number) => {
    try {
      await axiosInstance.patch(`/todos/${id}`);
      await fetchTodos(); // 최신 데이터 다시 가져오기
    } catch (error) {
      console.error("투두 상태 변경 실패:", error);
    }
  };

  // ✅ 4. 완료 목록 삭제
  const handleDelete = async (id: number) => {
    try {
      await axiosInstance.delete(`/todos/${id}`);
      fetchTodos(); // ✅ 서버에서 최신 데이터 다시 불러오기
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  };

  // ✅ 5. 첫 로딩 시 데이터 가져오기
  useEffect(() => {
    fetchTodos();
  }, []);

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
            todos={incomplete}
            isChecked={isChecked}
            handleCheck={handleCheck}
            registrationDate={regDate}
          ></TodoList>
          <CompleteList
            handleDelete={handleDelete}
            title={"Complete List"}
            height={"mainCard"}
            completedTodos={completed}
            registrationDate={regDate}
          ></CompleteList>
        </div>
        <LifeQuotes></LifeQuotes>
      </div>
    </div>
  );
};

export default TodoSection;
