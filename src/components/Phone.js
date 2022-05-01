function Phone() {
  return (
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
  );
}

export default Phone;
