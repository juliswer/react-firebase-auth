import { useAuth } from "../context/authContext";

function Phone() {
  const { user } = useAuth();

  return (
    <div className="mockup-phone animate__animated animate__fadeInLeft">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1 p-3">
          <div className="flex flex-col w-full border-opacity-50">
            <div className="card bg-base-100 shadow-xl image-full">
              <figure>
                <img src="https://picsum.photos/600/700" alt="Random" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {(user && user.displayName) || user.email}
                </h2>
                <p>
                  Hi, {user.displayName || user.email}, is really nice to see
                  you again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
