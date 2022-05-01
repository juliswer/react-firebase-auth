import Hero from "../components/Hero";
import Phone from "../components/Phone";
import { useAuth } from "../context/authContext";

function Home() {
  const {user} = useAuth()
  console.log(user);

  return (
    <div>
      <h2 className="pt-10 text-white text-center text-2xl font-bold">
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
  );
}

export default Home;
