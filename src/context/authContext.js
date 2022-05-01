import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <authContext.Provider value={{ signup, login }}>
      {children}
    </authContext.Provider>
  );
}
