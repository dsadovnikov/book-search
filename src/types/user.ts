import { IBook } from './Book';

export enum UserType {
  admin = 'admin',
  user = 'user',
  none = 'none',
}

export interface IUser {
  login: string;
  password: string;
  userType: UserType;
  library: IBook[];
}

export interface UserSlice {
  user: IUser;
}
