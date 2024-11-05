import { z } from 'zod';

export const notificationSettingsSchema = z.object({
  desktopNotification: z.boolean(),
  commentNotification: z.object({
    newComment: z.boolean(),
    myComment: z.boolean(),
    mentionedComment: z.boolean(),
    followedComment: z.boolean(),
  }),
  challengeNotification: z.object({
    inProgress: z.boolean(),
    start: z.boolean(),
    complete: z.boolean(),
    newChallenge: z.boolean(),
  }),
  emailNotification: z.object({
    important: z.boolean(),
    comment: z.boolean(),
    challenge: z.boolean(),
  }),
});
