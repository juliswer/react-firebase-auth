import Hero from "../components/Hero";
import Phone from "../components/Phone";
import { Spinner } from "../components/Spinner";
import { useAuth } from "../context/authContext";

function Home() {
  const { loading } = useAuth();

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h2 className="pt-10 text-white text-center text-5xl font-bold animate__animated animate__fadeInDown">
            React Firebase Auth App
          </h2>
          <div className="grid place-items-center h-screen grid-cols-6">
            <div className="col-span-4">
              <Phone />
            </div>
            <div>
              <Hero />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
