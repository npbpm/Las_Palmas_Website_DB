// import { createContext } from "react";

// const AuthContext = createContext();

// export default AuthContext;
import React, { createContext, useState } from "react";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      let res = await axios.post("/api/auth", formData, config);
      if (!localStorage.token) {
        localStorage.setItem("token", res.data.token);
      }
      setIsAuthenticated(true);

      setAuthToken(localStorage.token);
    } catch (error) {
      console.log("Not authentified");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  /*   const deleteReview = (formData) => {
    axios.delete("/api/delete/" + id, formData, config);
  }; */

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
