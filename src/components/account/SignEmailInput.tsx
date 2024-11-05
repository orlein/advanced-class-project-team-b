import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail } from 'lucide-react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface SignEmailInputProps {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const SignEmailInput: React.FC<SignEmailInputProps> = ({ id, label, register, error }) => {
  return (
    <div className="relative mb-4">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      <div className="relative mt-1">
        <Input
          id={id}
          type="email"
          placeholder="userEmail@example.com"
          {...register}
          className={`pl-10 pr-10 ${error ? 'border-red-500' : ''}`}
        />
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default SignEmailInput;
