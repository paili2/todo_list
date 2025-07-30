import { signupInputs } from "@/src/entities/auth-input";
import { AuthButton } from "@/src/shared/ui/AuthButton";

interface SignupFormProps {
  form: { email: string; nickName: string; password: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const SignUpForm = ({ form, onChange, onSubmit }: SignupFormProps) => {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {signupInputs.map((v) => (
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

      <AuthButton type="submit">회원가입</AuthButton>
    </form>
  );
};

export default SignUpForm;
