import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { apiUrl, LOCAL_TOKEN } from "./constants";
import { authReducer } from "../reduces/authReduces";


export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  // Check User Account

  // Login User

  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/user/login`, userForm);
      if (response.data.success)
        localStorage.setItem(LOCAL_TOKEN, response.data.accessToken);

      // await loadUser();

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const authContextData = { loginUser, authState };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
