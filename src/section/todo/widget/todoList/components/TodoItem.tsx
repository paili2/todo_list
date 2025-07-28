import Text from "@/src/shared/ui/Text";
import { TodoItemProps } from "@/src/types/list-type";

const TodoItem = ({ todo, isChecked, handleCheck }: TodoItemProps) => {
  return todo && !isChecked ? (
    <li className="w-full flex justify-between items-center border-b border-b-gray-200 pb-2">
      <div>
        <Text basicText={todo} variant="description"></Text>
        <Text basicText="2025.07.27" variant="date"></Text>
      </div>
      <input onChange={handleCheck} type="checkbox" checked={isChecked} />
    </li>
  ) : null;
};

export default TodoItem;
