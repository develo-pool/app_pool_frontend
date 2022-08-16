// export interface Message {
//   title: string;
//   body: string;
//   messageLink: string;
//   multipartFiles: string;
// }

export interface User {
  username: string;
  nickName: string;
  role: 'USER' | 'BRAND_USER' | string;
}
export interface Message {
  postId: number;
  body?: string;
  messageLink?: string;
  filePath?: string;
  writerDto: object | undefined;
  commentAble: boolean;
  isWriter: boolean;
  create_date: string;
}
