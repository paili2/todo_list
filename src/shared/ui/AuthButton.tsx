import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string; // 있으면 Link로 렌더링
  onClick?: () => void;
  type?: "button" | "submit";
}

export const AuthButton = ({
  children,
  href,
  onClick,
  type = "button",
}: ButtonProps) => {
  const baseStyle =
    "w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 text-center cursor-pointer";

  if (href) {
    return (
      <Link href={href} className={baseStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyle}>
      {children}
    </button>
  );
};
