"use client"
import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin must be used within a LoginProvider');
  }
  return context;
};

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username, password) => {
    if (username === 'example' && password === 'password') {
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
