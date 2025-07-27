import Input from "./listCard/components/Input";

const AddTodo = () => {
  return (
    <form className="flex gap-3" action="">
      <Input></Input>
      <button
        className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-2xl text-white font-bold"
        type="submit"
      >
        +
      </button>
    </form>
  );
};

export default AddTodo;
