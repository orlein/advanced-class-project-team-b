import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface SignPasswordInputProps {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const SignPasswordInput: React.FC<SignPasswordInputProps> = ({ id, label, register, error }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="relative mb-4 ">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      <div className="relative mt-1">
        <Input
          id={id}
          type={showPassword ? 'text' : 'password'}
          {...register}
          className={`pl-10 pr-10 ${error ? 'border-red-500' : ''}`}
        />
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5" />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 hover:bg-transparent hover:text-inherit"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </Button>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default SignPasswordInput;
