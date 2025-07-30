"use client";

import HomeButton from "@/src/shared/ui/HomeButton";
import Logo from "@/src/shared/ui/Logo";
import Link from "next/link";
import { useForm } from "../../shared/hooks/useForm";
import FindPasswordForm from "./FindPasswordForm";
import AuthLink from "@/src/shared/ui/AuthLink";

const FindPasswordPage = () => {
  const { form, handleChange } = useForm({
    email: "",
    userId: "",
    password: "",
  });

  const handleFindPassword = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // 비밀번호 찾기 요청 로직 (API 연동 예정)
  };
  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-100">
      <HomeButton></HomeButton>
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <Logo />
        <FindPasswordForm
          form={form}
          onChange={handleChange}
          onSubmit={handleFindPassword}
        />
        <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
          <AuthLink href="/login" text="로그인" color="black"></AuthLink>
          <AuthLink href="/find-id" text="아이디 찾기" color="black"></AuthLink>
        </div>
      </div>
    </main>
  );
};

export default FindPasswordPage;
