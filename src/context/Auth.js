import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [Auth, setAuth] = useState(null);

  return (
    <AuthContext.Provider value={{ Auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
