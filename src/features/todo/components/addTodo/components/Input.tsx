import { ChangeEvent } from "react";

export interface InputProps {
  handleTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input = ({ handleTodoChange, value }: InputProps) => {
  return (
    <div className="flex items-center basis-9/10 border-none shadow-lg rounded-4xl px-5 py-2 bg-white  transition-all duration-100 focus-within:shadow-[0_0_15px_rgba(59,130,246,0.6)]">
      <input
        type="text"
        className="w-full appearance-none outline-none border-none bg-transparent"
        placeholder="Write a To Do and Press Enter"
        onChange={handleTodoChange}
        value={value}
      />
    </div>
  );
};

export default Input;
