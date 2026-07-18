import { createContext, useState, useEffect } from "react";
import { login as loginService } from "../services/authService.js";
import { getCurrentAdmin } from "../services/authService.js";

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
  const checkAuth = async () => {
    try {
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
        setAdmin,
        loading,
        setLoading,
        login,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;