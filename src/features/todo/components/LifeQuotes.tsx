import ListTitle from "@/src/shared/ui/ListTitle";
import Text from "@/src/shared/ui/Text";

const LifeQuotes = () => {
  return (
    <div
      className={`h-[150px] w-full border-none rounded-2xl p-7 shadow-lg bg-white flex flex-col gap-5 justify-center`}
    >
      <ListTitle title={"Life Quotes"}></ListTitle>
      <Text
        variant="description"
        basicText="Do what you can, with what you have, where you are."
      ></Text>
    </div>
  );
};

export default LifeQuotes;
