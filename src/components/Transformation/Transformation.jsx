

const Transformation = () => {
    return (
        <div className="text-black">
          <h1 className="text-3xl font-thin text-center mt-10 mb-10 text-black">
            TransFormation
          </h1>

          <div className="carousel carousel-end rounded-box h-96 gap-0 border-4 border-yellow-800">
            <div className="carousel-item">
              <img src="https://i.ibb.co/FX6PWWQ/Gym-Review.jpg" alt="Drink" />
            </div>

            <div className="carousel-item">
              <img
                src="https://i.ibb.co/M2QYypL/Gym-REvirew2.jpg"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img src="https://i.ibb.co/SJLVrSD/gymreview4.jpg" alt="Drink" />
            </div>
            <div className="carousel-item">
              <img src="https://i.ibb.co/tmF1W7B/gymreview5.jpg" alt="Drink" />
            </div>
          </div>
          {/* 

https://i.ibb.co/SJLVrSD/gymreview4.jpg
https://i.ibb.co/tmF1W7B/gymreview5.jpg
*/}
        </div>
    );
};

export default Transformation;