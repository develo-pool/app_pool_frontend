export interface Following {
  brandInfo: string;
  brandProfileImage: string;
  brandUserId: number;
  brandUsername: string;
  isLoginUser: false;
  poolUserId: number;
  userInfoDto: userInfoDto;
}

export interface userInfoDto {
  userFollowerCount: number;
}
