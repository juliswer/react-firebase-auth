import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

export function Login() {
  const navigate = useNavigate();

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleGoogleSignIn = async () => {
    await loginWithGoogle();
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      toast.success(`Hello again, ${user.email}`, {
        position: "bottom-center",
      });
      navigate("/");
    } catch (error) {
      toast.error(error.message.slice(10), {
        position: "bottom-center",
      });
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) {
      toast.error("Please enter your email", {
        position: "bottom-center",
      });
    }
    try {
      await resetPassword(user.email);
      toast("Reset password email sent", {
        position: "bottom-center",
        icon: "❗"
      })
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="p-16 rounded-2xl bg-base-300/60 animate__animated animate__fadeIn">
        <h1 className="text-2xl mb-3 font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="youremail@company.ltd"
            value={user.email}
            onChange={handleChange}
            className="input w-full min-w-full"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            className="input w-full max-w-xs"
            type="password"
            name="password"
            id="password"
            placeholder="password123"
            value={user.password}
            onChange={handleChange}
          />
          <button className="btn btn-success mt-3 justify-end">Login</button>
        </form>
        <p
          onClick={handleResetPassword}
          className="text-center font-bold text-sm text-blue-500 hover:text-blue-800 mt-3 hover:cursor-pointer"
        >
          Forgot Password?
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline" onClick={handleGoogleSignIn}>
          Log in with Google
        </button>
        <div className="divider"></div>
        <h5>
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:text-blue-500">
            Create one
          </Link>
        </h5>
      </div>
    </div>
  );
}
