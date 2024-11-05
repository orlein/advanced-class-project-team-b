export interface NotificationSettings {
  desktopNotification: boolean;
  commentNotification: {
    newComment: boolean;
    myComment: boolean;
    mentionedComment: boolean;
    followedComment: boolean;
  };
  challengeNotification: {
    inProgress: boolean;
    start: boolean;
    complete: boolean;
    newChallenge: boolean;
  };
  emailNotification: {
    important: boolean;
    comment: boolean;
    challenge: boolean;
  };
}
