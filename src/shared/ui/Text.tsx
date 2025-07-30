interface TextProps {
  variant: "title" | "subTitle" | "description" | "date";
  pointText?: string;
  basicText?: string;
  className?: string;
}

const textType = {
  title: "text-4xl font-bold",
  subTitle: "text-2xl font-bold",
  description: "text-sm font-bold",
  date: "text-xs text-gray-400",
};

const Text = ({ variant, basicText, pointText, className = "" }: TextProps) => {
  return (
    <div className={`${textType[variant]} ${className}`}>
      <span>{basicText} </span>
      {pointText && <span className="text-blue-600">{pointText}</span>}
    </div>
  );
};

export default Text;
