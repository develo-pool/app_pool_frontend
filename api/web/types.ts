export interface getBrandWebMessageParams {
  brandId: number;
  cursor: number;
}

export interface brandProfile {
  brandInfo: string;
  brandProfileImage: string;
  brandUsername: string;
  userInfoDto: {
    userFollowerCount: number;
  };
}

export interface brand extends brandProfile {
  brandUserId: number;
  isLoginUser: boolean;
  poolUserId: number;
}

export interface BrandResult {
  brandUsername: string;
  brandUserId: number;
  brandInfo: string;
  brandProfileImage: any;
}

export interface AllBrandResult extends BrandResult {
  userInfoDto: {
    poolUserId: any;
    username: any;
    nickName: any;
    userStatus: any;
    follow: boolean;
    userFollowerCount: number;
    userFollowingCount: number;
    brandUserInfoDto: any;
  };
  poolUserId: number;
  brandUserId: number;
  isLoginUser: boolean;
}