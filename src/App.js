import './app.css';

function App() {
  return (
    <div>
      <h2 className="pt-10 text-white text-center text-2xl font-bold">React Firebase Auth App</h2>
      <div className="grid place-items-center h-screen grid-cols-6">
        <div className="col-span-4">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 p-3">
                <div className="flex flex-col w-full border-opacity-50">
                  <div className="card bg-base-100 shadow-xl image-full">
                    <figure>
                      <img
                        src="https://api.lorem.space/image/shoes?w=400&h=225"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">React Firebase</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-success">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="hero rounded-2xl p-5 w-max pt-10 bg-base-300/60">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hello there</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
