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
