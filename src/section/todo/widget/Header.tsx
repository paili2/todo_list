import Text from "@/src/shared/ui/Text";

const Header = () => {
  return (
    <>
      <Text variant="title" basicText="GoodDay," pointText="SONG"></Text>
      <Text
        variant="description"
        basicText="최종 접속 시간은 10시 02분 40초 입니다" // 최종 접속 시간 받아야 함
      ></Text>
    </>
  );
};

export default Header;
