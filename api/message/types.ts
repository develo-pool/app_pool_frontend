export interface User {
  username: string;
  nickName: string;
  role: 'USER' | 'BRAND_USER' | string;
}
export interface Message {
  postId: number;
  body: string;
  messageLink: string;
  filePath: string;
  writerDto: {
    poolUserId: number;
    username: string;
    nickName: string;
    userStatus: string;
    follow: boolean;
    userFollowerCount: number;
    userFollowingCount: number;
    brandUserInfoDto: {
      brandUserId: number;
      brandUsername: string;
      brandInfo: string;
      brandProfileImage: string;
      userInfoDto: string;
      poolUserId: string;
    };
  };
  commentAble: boolean;
  isWriter: boolean;
  create_date: string;
  commentCount: number;
}
