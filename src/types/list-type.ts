export interface ListTitleProps {
  title: string;
}

export interface ListCardProps extends ListTitleProps {
  height: "mainCard" | "etcCard";
}

export interface TodoItemProps {
  todo: string;
  isChecked: boolean;
  handleCheck: () => void;
}

export interface TodoListProps extends ListCardProps {
  todos: string[];
  isChecked: boolean[];
  handleCheck: (index: number) => void;
}

export interface CompleteItemProps {
  completedItem: string;
  handleDelete: () => void;
}

export interface CompleteListProps extends ListCardProps {
  completedTodos: string[];
  handleDelete: (index: number) => void;
}
