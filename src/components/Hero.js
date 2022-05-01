import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Hero() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="hero rounded-2xl p-5 w-max pt-10 bg-base-300/60 animate__animated animate__fadeInRight">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hi {user ? user.email : ""}</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary" onClick={handleLogout}>
            {user ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
