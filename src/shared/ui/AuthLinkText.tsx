import Link from "next/link";

interface AuthLinkTextProps {
  text: string; // 안내 문구
  linkText: string; // 링크에 표시될 글자
  href: string; // 이동할 경로
}

const AuthLinkText = ({ text, linkText, href }: AuthLinkTextProps) => {
  return (
    <div className="flex justify-center items-center mt-6 gap-1">
      <p className="text-sm text-gray-600">{text}</p>
      <Link href={href} className="text-sm text-blue-500 hover:underline">
        {linkText}
      </Link>
    </div>
  );
};

export default AuthLinkText;
