/* eslint-disable react/prop-types */
import { useReducer, useEffect, createContext } from "react";

export const AuthContext = createContext();

const token = localStorage.getItem("token");

const initialState = {
  isAuthenticated: token ? true : false,
  token: token || null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isAuthenticated: true,
        token: action.token,
      };
    case "LOGOUT":
      return {
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Handle token changes and save them to localStorage
  useEffect(() => {
    if (state.token) {
      localStorage.setItem("token", state.token);
    } else {
      localStorage.removeItem("token");
    }
  }, [state.token]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
