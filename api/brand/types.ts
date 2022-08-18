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
export interface AllBrandResult {
  brandUsername: string;
  brandInfo: string;
  brandProfileImage: any;
}
