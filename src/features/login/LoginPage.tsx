"use client";

import { useForm } from "@/src/shared/hooks/useForm";
import HomeButton from "@/src/shared/ui/HomeButton";
import Logo from "@/src/shared/ui/Logo";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";
import AuthLinkText from "@/src/shared/ui/AuthLinkText";
import AuthLink from "@/src/shared/ui/AuthLink";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();

  const { form, handleChange } = useForm({
    email: "",
    password: "",
  });

  const login = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        form
      );
      console.log("로그인 성공");
      const { access_token } = response.data;
      // ✅ access_token 저장 (localStorage)
      if (access_token) {
        localStorage.setItem("token", access_token);
      }
      router.push("/main");
    } catch (error) {
      console.log("로그인 실패", error);
      alert("로그인 실패! 다시 시도해주세요");
    }
    console.log("로그인 요청 데이터:", form);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-100">
      <HomeButton></HomeButton>
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <Logo />
        <LoginForm
          form={form}
          onChange={handleChange}
          onSubmit={(e) => {
            e.preventDefault();
            login();
          }}
        />
        <AuthLinkText
          href="/signup"
          text="계정이 없으신가요?"
          linkText="회원가입"
        ></AuthLinkText>
        <div className="flex justify-center mt-4 gap-4 text-sm text-blue-500">
          <AuthLink href="/find-id" text="아이디 찾기"></AuthLink>
          <span className="text-gray-300">|</span>
          <AuthLink href="/find-password" text="비밀번호 찾기"></AuthLink>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
