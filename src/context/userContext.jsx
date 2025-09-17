// AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie"; // install with: npm install js-cookie

// Create context
const AuthContext = createContext();

// Provider
export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null); // user object
  const [token, setToken] = useState(Cookies.get("token") ? Cookies.get("token") : null); // auth token

  // Load token from cookies on mount
  useEffect(() => {
    const savedToken = Cookies.get("token"); // token name in cookies
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = (newToken, userData) => {
    Cookies.set("token", newToken, { expires: 7 }); // persist 7 days
    setToken(newToken);
    setUser(userData);
  };
  // Helper: logout function
  const logout = () => {
    Cookies.remove("token");
    setToken(null);
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, token, setUser, setToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
export const useAuth = () => useContext(AuthContext);
