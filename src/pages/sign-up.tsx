import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import SignEmailInput from '@/components/account/SignEmailInput';
import SignPasswordInput from '@/components/account/SIgnPasswordInput';

const signUpSchema = z
  .object({
    email: z.string().email('유효한 이메일 주소를 입력하세요'),
    password: z
      .string()
      .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
      .regex(/^(?!.*(.)\1\1).*$/, '같은 문자를 3번 이상 반복할 수 없습니다.'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

type SignUpFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormData> = data => {
    console.log('회원가입 성공', data);
  };

  return (
    <div className="flex justify-center items-center h-[80%] w-full">
      <div className="max-w-lg w-full">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">회원가입</CardTitle>
            <CardDescription>커뮤니T의 친구가 되실 여러분 환영합니다</CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4">
            <div className="relative mb-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <SignEmailInput
                id="email"
                label="이메일"
                register={register('email')}
                error={errors.email}
              />

              <SignPasswordInput
                id="password"
                label="비밀번호"
                register={register('password')}
                error={errors.password}
              />

              <SignPasswordInput
                id="confirmPassword"
                label="비밀번호 확인"
                register={register('confirmPassword')}
                error={errors.confirmPassword}
              />

              <div className="text-center w-full text-sm font-thin mb-4">
                <Link to="/sign-in" className="text-primary hover:underline">
                  이미 계정이 있으신가요? 로그인
                </Link>
              </div>

              <div className="pt-4 mt-8">
                <Button className="w-full" type="submit">
                  회원가입
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
