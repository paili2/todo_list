import ListTitle from "./components/ListTitle";
import { ListCardProps } from "./types/type";

const ListCard = ({ title, height }: ListCardProps) => {
  const cardType = { mainCard: "h-[350px]", etcCard: "h-[150px]" };

  return (
    <div
      className={`${cardType[height]} w-full border-none rounded-2xl p-7 shadow-lg bg-white`}
    >
      <ListTitle title={title}></ListTitle>
    </div>
  );
};

export default ListCard;
