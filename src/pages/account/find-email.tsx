import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SignEmailInput from '@/components/account/SignEmailInput';

const findEmailSchema = z.object({
  email: z.string().email('유효한 이메일 주소를 입력하세요'),
});

type FindEmailFormData = {
  email: string;
};

const FindEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FindEmailFormData>({
    resolver: zodResolver(findEmailSchema),
  });

  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit = (data: FindEmailFormData) => {
    console.log('이메일 찾기', data);
    // 이메일 존재한다고 가정 후, submittedEmail 설정
    setSubmittedEmail(data.email);
  };

  const handleButtonClick = () => {
    if (submittedEmail) {
      navigate('/sign-in', { replace: true });
    }
  };

  return (
    <div className="flex justify-center items-center h-[80%] w-full">
      <div className="max-w-lg w-full">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl mb-2">이메일 찾기</CardTitle>
            <CardDescription>
              이메일을 입력해주세요.
              <br />
              해당 이메일 가입 여부를 알려드립니다.
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

              {/* 이메일 가입 여부 메시지 표시 */}
              {submittedEmail && (
                <div className="mt-8 text-center">
                  <p className="text-green-600 font-bold">{submittedEmail}</p>
                  <p className="text-green-600">해당 이메일로 가입이 확인되었습니다.</p>
                </div>
              )}

              <div className="pt-4 mt-8">
                <Button
                  type={submittedEmail ? 'button' : 'submit'}
                  className="w-full"
                  onClick={submittedEmail ? handleButtonClick : undefined}
                >
                  {submittedEmail ? '로그인' : '이메일 찾기'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FindEmail;
