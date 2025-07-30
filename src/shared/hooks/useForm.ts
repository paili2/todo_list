import { useState } from "react";

export function useForm<T extends object>(initialState: T) {
  const [form, setForm] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return { form, handleChange, setForm };
}
