"use client";

import Text from "@/src/shared/ui/Text";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-5">
        <Text variant="title" basicText="GoodDay," pointText="SONG"></Text>
        <Text
          variant="description"
          basicText="최종 접속 시간은 10시 02분 40초 입니다" // 최종 접속 시간 받아야 함
        ></Text>
      </div>
      <button
        onClick={() => router.push("/")}
        className="h-[32px] px-4 bg-gray-300 text-white text-xs rounded-md hover:bg-gray-400 transition cursor-pointer self-start"
      >
        로그아웃
      </button>
    </div>
  );
};

export default Header;
