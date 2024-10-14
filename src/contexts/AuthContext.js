import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  const isAuthenticated = () => {
    return !!authToken;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authToken, }}>
      {children}
    </AuthContext.Provider>
  );
};
