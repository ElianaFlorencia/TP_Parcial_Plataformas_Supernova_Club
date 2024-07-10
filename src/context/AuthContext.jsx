import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      // Simulación de autenticación
      if (email === 'admin@example.com' && password === 'admin') {
        const user = { email, role: 'admin' };
        setUser(user);
        resolve(user);
      } else if (email === 'user@example.com' && password === 'user') {
        const user = { email, role: 'user' };
        setUser(user);
        resolve(user);
      } else {
        reject('Credenciales incorrectas');
      }
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

