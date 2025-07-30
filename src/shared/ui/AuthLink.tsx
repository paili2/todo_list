import Link from "next/link";

interface AuthLinkProps {
  href: string;
  text: string;
  color?: "gray" | "black" | "blue";
}

const colorStyles = {
  gray: "text-gray-400 hover:text-blue-500",
  black: "text-gray-600 hover:text-blue-500",
  blue: "text-blue-500 hover:text-blue-700",
};

const AuthLink = ({ href, text, color = "gray" }: AuthLinkProps) => {
  return (
    <Link
      href={href}
      className={`text-sm text-gray-400 hover:text-blue-500 hover:underline  ${colorStyles[color]}`}
    >
      {text}
    </Link>
  );
};

export default AuthLink;
