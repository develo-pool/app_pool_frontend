export interface User {
  username: string;
  nickName: string;
  role: 'USER' | 'BRAND_USER' | string;
}
export interface Comment {
  id: number;
  body: string;
  writer: {
    poolUserId: any;
    username: string;
    nickName: string;
    userStatus: string;
    follow: boolean;
    userFollowerCount: number;
    userFollowingCount: number;
    brandUserInfoDto: {
      brandUsername: string;
      brandInfo: string;
      brandProfileImage: string;
      userInfoDto: any;
      poolUserId: any;
    };
  };
  create_date: string;
}

export interface CreateComment {
  messageId: number;
  body: string;
}
