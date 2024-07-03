// @types.auth

import { User } from "firebase/auth";

type AuthPromise = Promise<{ success: boolean, message: string }>;

export type AuthType = {
  pageLoading: boolean,
  user: User | undefined,
  login: (email: string, password: string) => AuthPromise,
  register: ({ name: string, email: string, password: string }) => AuthPromise,
  logout: () => void
}