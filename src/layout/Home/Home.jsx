import { useLoaderData } from "react-router-dom";
import Service from "../../components/Service/Service";
import Transformation from "../../components/Transformation/Transformation";
import Header from "../../components/Header/Header";

const Home = () => {
  const datas = useLoaderData();
  // console.log(datas);

  return (
    <div className="max-w-7xl mx-auto bg-white">

      <Header></Header>
      <div className="mt-10">
        <h1 className="text-3xl font-semibold text-center uppercase text-black ">
          Welcome to Masum <br />
          Fitness{" "}
        </h1>

       <Transformation></Transformation>

        <h3 className="text-yellow-950 text-center text-xl font-serif  font-bold mt-10 ">
          Our Services
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mt-5 p-4">
          {datas.map((data) => (
            <Service key={data.id} datas={data}></Service>
          ))}
        </div>


            <div>
              
            </div>
      </div>
    </div>
  );
};

export default Home;
