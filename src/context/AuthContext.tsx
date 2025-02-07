import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextType {
  user: any;
  login: (tokenObject: { access_token: string }, user: any) => void;
  register: (data: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PRODUCTION
      : process.env.REACT_APP_API_URL_LOCAL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .get(`${apiUrl}/auth/me`)
        .then((response) => setUser(response.data))
        .catch((error) => setUser(null));
    }
  }, [apiUrl]);

  const login = (tokenObject: { access_token: string }, user: any) => {
    setUser(user);
    localStorage.setItem("token", tokenObject.access_token);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${tokenObject.access_token}`;
    navigate("/visas/usa");
  };

  const register = async (data: any) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      login(response.data.token, response.data.user);
    } catch (error) {
      console.error("Registration failed", error);
      return;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("visaForm");
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.log("user is not authorized");
    return;
  }
  return context;
};
