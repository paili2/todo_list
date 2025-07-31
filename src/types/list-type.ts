export interface ListTitleProps {
  title: string;
}

export interface ListCardProps extends ListTitleProps {
  height: "mainCard" | "etcCard";
}

export interface TodoItemProps {
  todoItem: Todo;
  isChecked: boolean;
  registrationDate: Date;
  handleCheck: () => void;
}

export interface SectionProps {
  className: string;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean; // ✅ 추가
  createdAt?: string;
  updatedAt?: string;
}
export interface TodoListProps extends ListCardProps {
  todos: Todo[];
  isChecked: boolean[];
  registrationDate: Date;
  handleCheck: (index: number) => void;
}

export interface CompleteItemProps {
  completedItem: Todo;
  registrationDate: Date;
  handleDelete: () => void;
}

export interface CompleteListProps extends ListCardProps {
  completedTodos: Todo[];
  registrationDate: Date;
  handleDelete: (index: number) => void;
}
