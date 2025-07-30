"use client";

import HomeButton from "@/src/shared/ui/HomeButton";
import Logo from "@/src/shared/ui/Logo";
import { useState } from "react";
import FindIdForm from "./FindIdForm";
import AuthLink from "@/src/shared/ui/AuthLink";

const FindIdPage = () => {
  const [email, setEmail] = useState<string>("");

  const handleFindId = (e: React.FormEvent) => {
    e.preventDefault();
    // 아이디 찾기 요청 로직 (API 연동 예정)
    alert(`입력한 이메일: ${email}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-100">
      <HomeButton></HomeButton>
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <Logo />
        <FindIdForm
          email={email}
          onChange={(e) => setEmail(e.target.value)}
          onSubmit={handleFindId}
        ></FindIdForm>
        <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
          <AuthLink href="/login" text="로그인" color="black"></AuthLink>
          <AuthLink
            href="/find-password"
            text="비밀번호 찾기"
            color="black"
          ></AuthLink>
        </div>
      </div>
    </main>
  );
};

export default FindIdPage;
