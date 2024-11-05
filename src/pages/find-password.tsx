import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SignEmailInput from '@/components/account/SignEmailInput';

const findPasswordSchema = z.object({
  email: z.string().email('유효한 이메일 주소를 입력하세요'),
});

type FindPasswordFormData = {
  email: string;
};

const FindPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FindPasswordFormData>({
    resolver: zodResolver(findPasswordSchema),
  });

  const onSubmit = (data: FindPasswordFormData) => {
    console.log('비밀번호 찾기', data);
  };

  return (
    <div className="flex justify-center items-center h-[80%] w-full">
      <div className="max-w-lg w-full">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl mb-2">비밀번호 찾기</CardTitle>
            <CardDescription>
              가입할 때 사용하신 이메일을 입력해주세요.
              <br />
              비밀번호 재설정 링크를 보내드립니다.
            </CardDescription>
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
              <div className="text-center w-full text-sm font-thin">
                <Link to="/account/find-email" className="text-primary hover:underline">
                  이메일이 기억 안나시나요?
                </Link>
              </div>
              <div className="pt-4 mt-8">
                <Button type="submit" className="w-full ">
                  비밀번호 재설정
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FindPassword;
