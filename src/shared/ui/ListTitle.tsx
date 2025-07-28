import { ListTitleProps } from "@/src/types/list-type";
import Text from "@/src/shared/ui/Text";

const ListTitle = ({ title }: ListTitleProps) => {
  return (
    <div className="border-b-2 border-gray-300 pb-2">
      <Text variant="subTitle" basicText={title}></Text>
    </div>
  );
};

export default ListTitle;
