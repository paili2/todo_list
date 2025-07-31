import Text from "@/src/shared/ui/Text";
import { TodoItemProps } from "@/src/types/list-type";

const TodoItem = ({
  todoItem,
  isChecked,
  handleCheck,
  registrationDate,
}: TodoItemProps) => {
  return todoItem && !isChecked ? (
    <li className="w-full flex justify-between items-center border-b border-b-gray-200 pb-2">
      <div>
        <Text basicText={todoItem.title} variant="description"></Text>
        <Text
          basicText={registrationDate.toLocaleDateString()}
          variant="date"
        ></Text>
      </div>
      <input onChange={handleCheck} type="checkbox" checked={isChecked} />
    </li>
  ) : null;
};

export default TodoItem;
