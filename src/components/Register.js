import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function Register() {
  const navigate = useNavigate();

  const { signup, loginWithGoogle } = useAuth();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password);
      toast.success("Successfully registered!", {
        position: "bottom-center",
      });
      navigate("/");
    } catch (error) {
      toast.error(error.message.slice(10), {
        position: "bottom-center",
      });
    }
  };

  const handleGoogleSignIn = async () => {
    await loginWithGoogle();
    navigate("/");
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="p-14 rounded-2xl bg-base-300/60 animate__animated animate__fadeIn">
        <h1 className="text-2xl mb-3 font-bold text-center">Register</h1>
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
            className="input w-full max-w-xs"
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

          <button className="btn btn-success mt-3">Register</button>
          <div className="divider">OR</div>
        </form>
        <button className="btn btn-outline" onClick={handleGoogleSignIn}>
          Sign up with Google
        </button>
        <div className="divider"></div>
        <h5>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:text-blue-500">
            Log in
          </Link>
        </h5>
      </div>
    </div>
  );
}
