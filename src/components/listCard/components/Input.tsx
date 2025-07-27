const Input = () => {
  return (
    <div className="flex items-center basis-9/10 border-none shadow-lg rounded-4xl px-5 py-2 bg-white">
      <input
        type="text"
        className="w-full appearance-none outline-none border-none bg-transparent"
        placeholder="Write a To Do and Press Enter"
      />
    </div>
  );
};

export default Input;
