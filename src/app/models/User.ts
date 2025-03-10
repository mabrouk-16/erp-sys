export interface User {
  userId?: string;
  email?: string;
  emailVerified?: boolean;
  userName?: string;
  picture?: string | null;
  title?: string | null;
  birthDate?: string | null;
  phone?: string | null;
  address?: string | null;
  gender?: string | null;
  role?: UserRoles;
  department?: Departments ;
  createdAt?: string | null;
  links?: UserLinks;
}
export enum UserRoles {
  user = 'user',
  admin = 'admin',
  super_admin = 'super_admin',
}
export enum Departments {
  Cyber = 'Cyber',
  Developers = 'Developers',
  Marketing = 'Marketing',
}
export interface regBody {
  userName: string;
  email: string;
  password: string;
  birthDate?: string | null;
  phone?: string | null;
  address?: string | null;
  gender?: string | null;
  department?: Departments;
  title?: string | null;
}
export interface logBody {
  email: string;
  password: string;
}
export interface UserLinks {
  linkedIn?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  github?: string | null;
  website?: string | null;
}
