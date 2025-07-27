export interface ListTitleProps {
  title: string;
}

export interface ListCardProps extends ListTitleProps {
  height: "mainCard" | "etcCard";
}
