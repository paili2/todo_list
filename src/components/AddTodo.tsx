import Input from "./listCard/components/Input";

const AddTodo = () => {
  return (
    <form className="flex justify-between" action="">
      <Input></Input>
      <button
        className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-2xl text-white font-bold hover:cursor-pointer"
        type="submit"
      >
        +
      </button>
    </form>
  );
};

export default AddTodo;
