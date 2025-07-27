import Text from "../shared/ui/Text";
import AddTodo from "./AddTodo";

import ListCard from "./listCard/ListCard";

interface SectionProps {
  className: string;
}

const TodoSection = ({ className }: SectionProps) => {
  return (
    <div className={`${className} bg-blue-50`}>
      <div className="w-full max-w-[1300px] max-h-screen mx-auto flex flex-col gap-5 p-10">
        <Text variant="title" basicText="GoodDay," pointText="SONG"></Text>
        <Text
          variant="description"
          basicText="최종 접속 시간은 10시 02분 40초 입니다" // 최종 접속 시간 받아야 함
        ></Text>
        <AddTodo></AddTodo>
        <div className="flex gap-5">
          <ListCard title={"Todo List"} height={"mainCard"}></ListCard>
          <ListCard title={"Complete List"} height={"mainCard"}></ListCard>
        </div>
        <ListCard title={"Life Quotes"} height={"etcCard"}></ListCard>
      </div>
    </div>
  );
};

export default TodoSection;
