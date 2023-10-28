/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {AuthContext, LoginMethods} from './AuthContext';

export const AuthProvider: React.FC<any> = ({children}) => {
  const [token, setToken] = useState('');
  const [loginMethod, setLoginMethod] = useState<LoginMethods>(
    LoginMethods.none,
  );
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const saveToken = (token: string, method: LoginMethods) => {
    console.log('token', token);
    setToken(token);
    setIsLoggedIn(true);
    console.log('cambio a true!!!');
    setLoginMethod(method);
  };

  const clearSession = () => {
    setToken('');
    setIsLoggedIn(false);
    setLoginMethod(LoginMethods.none);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn,
        saveToken,
        loginMethod,
        clearSession,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
