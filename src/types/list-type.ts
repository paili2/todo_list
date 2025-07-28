export interface ListTitleProps {
  title: string;
}

export interface ListCardProps extends ListTitleProps {
  height: "mainCard" | "etcCard";
}

export interface TodoItemProps {
  todo: string;
  isChecked: boolean;
  registrationDate: Date;
  handleCheck: () => void;
}

export interface TodoListProps extends ListCardProps {
  todos: string[];
  isChecked: boolean[];
  registrationDate: Date;
  handleCheck: (index: number) => void;
}

export interface CompleteItemProps {
  completedItem: string;
  registrationDate: Date;
  handleDelete: () => void;
}

export interface CompleteListProps extends ListCardProps {
  completedTodos: string[];
  registrationDate: Date;
  handleDelete: (index: number) => void;
}
