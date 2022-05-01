import { useAuth } from "../context/authContext";

function Phone() {
  const { user } = useAuth();

  return (
    <div className="mockup-phone animate__animated animate__fadeInLeft">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard bg-white phone-1 p-3">
          {user.photoURL ? (
            <div className="flex mt-8 mb-5">
              <img
                className="avatar rounded-full w-10 mr-2"
                src={user.photoURL}
                alt={user.displayName}
              />
              <p className="mt-2">{user.displayName}</p>
            </div>
          ) : (
            <div className="flex mt-8 mb-5">
              <div class="avatar placeholder w-10 mr-2">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <span>{user.email.slice(0, 2)}</span>
                </div>
              </div>
              <p className="mt-2">{user.email}</p>
            </div>
          )}
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
          <ul className="menu menu-horizontal border border-indigo-400 bg-base-100 rounded-box flex justify-center mt-10">
            <li>
              <p>Item 1</p>
            </li>
            <li>
              <p>Item 2</p>
            </li>
            <li>
              <p>Item 3</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Phone;
