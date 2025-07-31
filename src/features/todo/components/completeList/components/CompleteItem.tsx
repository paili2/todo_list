import Text from "@/src/shared/ui/Text";
import { CompleteItemProps } from "@/src/types/list-type";
import { X } from "lucide-react";

const CompleteItem = ({
  completedItem,
  handleDelete,
  registrationDate,
}: CompleteItemProps) => {
  return (
    <li className="w-full flex justify-between items-center border-b border-b-gray-200 pb-2">
      <div>
        <Text
          className="line-through text-gray-400"
          basicText={completedItem.title}
          variant="description"
        />
        <Text
          basicText={registrationDate.toLocaleDateString()}
          variant="date"
        />
      </div>
      <button
        onClick={handleDelete}
        className="w-8 h-8 flex items-center justify-center rounded-full opacity-0 hover:opacity-100 transition-all duration-200 text-red-600"
      >
        <X size={15} strokeWidth={3} />
      </button>
    </li>
  );
};

export default CompleteItem;
