export interface User {
  username: string;
  nickName: string;
  role: 'USER' | 'BRAND_USER' | string;
}
export interface Comment {
  id: number;
  body: string;
  writer?: {
    poolUserId?: any;
    username: string;
    nickName: string;
    userStatus?: string;
    follow: boolean;
    userFollowerCount: number;
    userFollowingCount: number;
    brandUserInfoDto?: any;
  };
}

export interface CreateComment {
  messageId: number;
  body: string;
}
