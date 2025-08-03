// src/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext(null);

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Example: logged in user info

  const login = (username) => {
    setUser({ name: username });
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

// Custom hook to easily use the context
export const useAuth = () => {
  return useContext(AuthContext);
};