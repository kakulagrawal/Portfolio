import { createContext, useState, useEffect } from "react";
import {
  login as loginService,
  logout as logoutService,
  getCurrentAdmin,
} from "../services/authService.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (credentials) => {
    try {
      const data = await loginService(credentials);

      setAdmin(data.admin);

      return data;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutService();
    } finally {
      // Always clear frontend auth state
      setAdmin(null);
    }
  };

  const checkAuth = async () => {
    try {
      setLoading(true);

      const data = await getCurrentAdmin();

      setAdmin(data.admin);
    } catch (error) {
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        admin,
        loading,
        login,
        logout,
        checkAuth,
        setAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;