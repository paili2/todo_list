"use client";

import HomeButton from "@/src/shared/ui/HomeButton";
import Logo from "@/src/shared/ui/Logo";
import { useRouter } from "next/navigation";

import { useForm } from "@/src/shared/hooks/useForm";
import SignUpForm from "./SignUpForm";
import AuthLinkText from "@/src/shared/ui/AuthLinkText";

const SignUpPage = () => {
  const { form, handleChange } = useForm({
    email: "",
    nickName: "",
    password: "",
  });

  const router = useRouter();

  const signup = async () => {
    console.log("폼 데이터:", form);
    // axios.post("/api/users", form);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-50">
      <HomeButton></HomeButton>
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <Logo />
        <SignUpForm
          form={form}
          onChange={handleChange}
          onSubmit={signup}
        ></SignUpForm>
        <AuthLinkText
          href="/login"
          text="이미 계정이 있으신가요?"
          linkText="로그인"
        ></AuthLinkText>
      </div>
    </main>
  );
};

export default SignUpPage;
