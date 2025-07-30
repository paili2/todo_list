import { Home } from "lucide-react";
import Link from "next/link";

const HomeButton = () => {
  return (
    <div className="absolute top-6 left-6">
      <Link
        href="/"
        className="text-sm text-gray-600 hover:text-blue-600 font-medium"
      >
        <Home className="w-5 h-5"></Home>
      </Link>
    </div>
  );
};

export default HomeButton;
