import { findPasswordInputs } from "@/src/entities/auth-input";
import { AuthButton } from "@/src/shared/ui/AuthButton";

interface FindPasswordFormProps {
  form: { email: string; userId: string; password: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FindPasswordForm = ({
  form,
  onChange,
  onSubmit,
}: FindPasswordFormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {findPasswordInputs.map((v) => (
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
      <AuthButton type="submit">비밀번호 찾기</AuthButton>
    </form>
  );
};

export default FindPasswordForm;
