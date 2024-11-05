import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import SocialButton from '@/components/account/SocialButton';
import SignEmailInput from '@/components/account/SignEmailInput';
import SignPasswordInput from '@/components/account/SIgnPasswordInput';
import { useDispatch } from 'react-redux';
import { login } from '@/RTK/authSlice';

const signInSchema = z.object({
  email: z.string().email('유효한 이메일 주소를 입력하세요'),
  password: z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.'),
});

type FormData = {
  email: string;
  password: string;
};

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log('로그인 성공', data);
    dispatch(login({ email: data.email })); // 로그인 API 호출
    reset(); // 폼 초기화
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-[80%] w-full">
      <div className="max-w-lg w-full">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">운동 커뮤니T</CardTitle>
            <CardDescription>운동을 좋아하시나요? 여깁니다 여기</CardDescription>
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

              <div className="pt-4 mt-8 mb-4">
                <Button type="submit" className="w-full">
                  로그인
                </Button>
              </div>

              <div className="text-center w-full text-sm font-thin mb-4">
                <Link to="/account/find-email" className="text-primary hover:underline">
                  이메일 찾기
                </Link>
                <Link to="/find-password" className="text-primary hover:underline ml-8">
                  비밀번호 찾기
                </Link>
                <Link to="/sign-up" className="text-primary hover:underline ml-8">
                  회원가입
                </Link>
              </div>
            </form>

            <div className="relative mt-2 mb-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">SNS LOGIN</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-12 mb-4 mt-4">
              <SocialButton imageSrc="/images/Naver.png" altText="Naver" />
              <SocialButton imageSrc="/images/Kakao.png" altText="Kakao" />
              <SocialButton imageSrc="/images/Google.png" altText="Google" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signin;
