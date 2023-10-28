import {createContext} from 'react';

export enum LoginMethods {
  native,
  web,
  none,
}
export interface AuthContext {
  token: string;
  isLoggedIn: boolean;
  loginMethod: LoginMethods;
  saveToken: (token: string, method: LoginMethods) => void;
  clearSession: () => void;
}

export const AuthContext = createContext<AuthContext>({
  token: '',
  isLoggedIn: false,
  saveToken: () => {},
  loginMethod: LoginMethods.none,
  clearSession: () => {},
});
