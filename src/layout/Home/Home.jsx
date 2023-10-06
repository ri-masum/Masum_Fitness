const Home = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white">
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">
              <span className="font-extrabold text-yellow-400">Train hard</span>{" "}
              <br /> train yard
            </h1>
            <p className="mb-5"></p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-center uppercase text-black ">
          Welcome to Masum <br />
          Fitness{" "}
        </h1>
        <h3 className="text-black text-center text-xl font-serif ">
          Our Service
        </h3>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
       <div className="card w-96 bg-base-100 shadow-xl text-black">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
       
       </div>
      </div>
    </div>
  );
};

export default Home;
