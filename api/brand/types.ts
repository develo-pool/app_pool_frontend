export interface BrandResult {
  brandUsername: string;
  brandInfo: string;
  brandProfileImage: any;
}

export interface BrandAssignParams {
  brandUsername: string;
  brandInfo: string;
  brandAgreement: boolean;
  brandCategory: string[];
  brandProfileImage: any;
}
export interface UpdateBrandInfoParams {
  brandInfo: string;
}
export interface BrandProfileResult extends BrandResult {
  userInfoDto: {
    follow: boolean;
    userFollowerCount: number;
  };
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
