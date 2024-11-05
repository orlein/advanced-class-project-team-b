import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { notificationSettingsSchema } from '@/schemas/settings';
import { Button } from '@/components/ui/button';

type NotificationFormValues = z.infer<typeof notificationSettingsSchema>;

const defaultValues: NotificationFormValues = {
  desktopNotification: true,
  commentNotification: {
    newComment: true,
    myComment: true,
    mentionedComment: true,
    followedComment: true,
  },
  challengeNotification: {
    inProgress: true,
    start: true,
    complete: true,
    newChallenge: true,
  },
  emailNotification: {
    important: true,
    comment: true,
    challenge: true,
  },
};

const NotificationForm = () => {
  const form = useForm<NotificationFormValues>({
    resolver: zodResolver(notificationSettingsSchema),
    defaultValues,
  });

  const onSubmit = async () => {
    console.log('설정 저장 버튼 클릭');
  };

  return (
    // Form 작업 중
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="desktopNotification"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">데스크톱 알림 표시</FormLabel>
                <FormDescription>이 브라우저에서 알림 받기</FormDescription>
              </div>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">게시글/댓글 알림</h3>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="commentNotification.newComment"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between">
                  <FormLabel className="text-base">내 글에 달린 댓글</FormLabel>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit">설정 저장</Button>
      </form>
    </Form>
  );
};

export default NotificationForm;
