"use client";

import ListTitle from "@/src/shared/ui/ListTitle";
import { CompleteListProps } from "../../../../types/list-type";
import CompleteItem from "./components/CompleteItem";

const CompleteList = ({
  title,
  height,
  completedTodos,
  handleDelete,
}: CompleteListProps) => {
  const cardType = { mainCard: "h-[350px]", etcCard: "h-[150px]" };

  return (
    <div
      className={`${cardType[height]} w-full border-none rounded-2xl p-7 shadow-lg bg-white`}
    >
      <ListTitle title={title}></ListTitle>
      <ul className="w-full py-3 flex flex-col gap-3 pt-5">
        {completedTodos.map((v, i) => (
          <CompleteItem
            key={i}
            completedItem={completedTodos[i]}
            handleDelete={() => handleDelete(i)}
          ></CompleteItem>
        ))}
      </ul>
    </div>
  );
};

export default CompleteList;
