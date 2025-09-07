import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Configure axios to send credentials (cookies) with every request
axios.defaults.withCredentials = true;
const API_URL = `${process.env.REACT_APP_API_URL}/api/auth`;

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is already logged in
    const checkLoggedIn = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/status`);
        if (data.isLoggedIn) {
          setUser(data.user);
        }
      } catch (error) {
        console.error('Not authenticated', error);
      } finally {
        setLoading(false);
      }
    };
    checkLoggedIn();
  }, []);

  const login = async (email, password) => {
    const { data } = await axios.post(`${API_URL}/login`, { email, password });
    setUser(data);
    return data;
  };

  const register = async (email, password) => {
    const { data } = await axios.post(`${API_URL}/register`, { email, password });
    return data;
  };

  const logout = async () => {
    await axios.post(`${API_URL}/logout`);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);