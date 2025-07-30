import { AuthButton } from "@/src/shared/ui/AuthButton";
import Logo from "@/src/shared/ui/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto text-center p-6 bg-white rounded-2xl shadow-xl">
        <Logo />
        <p className="text-gray-600 mb-8">
          해야 할 일을 잊지 말고, 지금 바로 시작하세요.
        </p>

        <div className="flex flex-col gap-4">
          <AuthButton href="/login">로그인</AuthButton>
          <Link
            href="/signup"
            className="w-full py-3 border-none text-sm text-gray-500 font-medium rounded-lg hover:text-blue-600 transition duration-300 text-center"
          >
            회원가입
          </Link>
        </div>
      </div>
    </main>
  );
}
