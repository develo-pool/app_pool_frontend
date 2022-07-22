export interface User {
  username: string;
  nickName: string;
  userStatus: 'USER' | 'BRAND_USER';
}

export interface AuthResult {
  accessToken: string;
  refreshToken: string;
}
