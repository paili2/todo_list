import { AuthButton } from "@/src/shared/ui/AuthButton";

interface FindIdFormProps {
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FindIdForm = ({ email, onChange, onSubmit }: FindIdFormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="가입한 이메일을 입력하세요"
        value={email}
        onChange={onChange}
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <AuthButton type="submit">아이디 찾기</AuthButton>
    </form>
  );
};

export default FindIdForm;
