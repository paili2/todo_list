import Text from "@/src/shared/ui/Text";
import { ListTitleProps } from "../types/type";

const ListTitle = ({ title }: ListTitleProps) => {
  return (
    <div className="border-b-2 border-gray-300 pb-2">
      <Text variant="subTitle" basicText={title}></Text>
    </div>
  );
};

export default ListTitle;
