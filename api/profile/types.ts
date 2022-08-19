export interface BrandProfileResult {
  writerDto: {
    poolUserId: number;
    follow: boolean;
    userFolloerCount: number;
    brandUserInfoDto: {
      brandUsername: string;
      brandInfo: string;
      brandProfileImage: string;
    };
  };
}

export interface BrandProfileParams {
  poolUserId: string;
}
