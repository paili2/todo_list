import { loginInputs } from "@/src/entities/auth-input";
import { AuthButton } from "@/src/shared/ui/AuthButton";

interface LoginFormProps {
  form: { email: string; password: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm = ({ form, onChange, onSubmit }: LoginFormProps) => {
  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      {loginInputs.map((v) => (
        <input
          key={v.id}
          name={v.id}
          type={v.type}
          placeholder={v.placeholder}
          value={form[v.id as keyof typeof form]}
          onChange={onChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      ))}
      <AuthButton type="submit">로그인</AuthButton>
    </form>
  );
};

export default LoginForm;
