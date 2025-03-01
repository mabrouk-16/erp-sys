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
  department?: string | null;
  createdAt?: string | null;
}
export enum UserRoles {
  user = 'user',
  admin = 'admin',
  super_admin = 'super_admin',
}
export interface regBody {
  userName: string;
  email: string;
  password: string;
  birthDate?: string | null;
  phone?: string | null;
  address?: string | null;
  gender?: string | null;
  department?: string | null;
  title?: string | null;
}
export interface logBody {
  email: string;
  password: string;
}
