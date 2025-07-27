import { Children, ReactNode } from "react";

interface TextProps {
  variant: "title" | "subTitle" | "description";
  pointText?: string;
  basicText: string;
}

const textType = {
  title: "text-4xl font-bold",
  subTitle: "text-2xl font-bold",
  description: "text-sm font-bold",
};

const Text = ({ variant, basicText, pointText }: TextProps) => {
  return (
    <div className={`${textType[variant]}`}>
      <span>{basicText} </span>
      <span className="text-blue-600">{pointText}</span>
    </div>
  );
};

export default Text;
