// @types.auth

import { User } from "firebase/auth";

type authPromise = Promise<{ success: boolean, message: string }>;

export type authT = {
  pageLoading: boolean,
  user: User | undefined,
  login: (email: string, password: string) => authPromise,
  register: ({ name: string, email: string, password: string }) => authPromise,
  logout: () => void
}