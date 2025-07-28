import Input, { InputProps } from "./components/Input";
import AddButton from "./components/AddButton";
import { FormEvent } from "react";

interface AddTodoProps extends InputProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const AddTodo = ({ handleSubmit, handleTodoChange, value }: AddTodoProps) => {
  return (
    <form className="flex justify-between" action="" onSubmit={handleSubmit}>
      <Input handleTodoChange={handleTodoChange} value={value}></Input>
      <AddButton></AddButton>
    </form>
  );
};

export default AddTodo;
