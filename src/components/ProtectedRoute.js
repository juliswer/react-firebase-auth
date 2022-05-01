import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (user) {
    const email = user.email;
    localStorage.setItem("email", email);
    const accessToken = user.accessToken;
    localStorage.setItem("accessToken", accessToken);
    console.log(user);
  }

  const userEmail = localStorage.getItem("email");
  const userToken = localStorage.getItem("accessToken");

  if (!userEmail && !userToken) return <Navigate to="/login" />;

  return <>{children}</>;
}
