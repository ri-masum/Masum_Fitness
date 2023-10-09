import { useLoaderData } from "react-router-dom";
import Service from "../../components/Service/Service";
import Transformation from "../../components/Transformation/Transformation";
import Header from "../../components/Header/Header";
import Trainers from "../../components/Trainers/Trainers";
import Aos from 'aos';
import { useEffect } from 'react';

import 'aos/dist/aos.css'
const Home = () => {
  const datas = useLoaderData();
  // console.log(datas);
  useEffect(()=>{
    Aos.init()
  },[])
  

  return (
    <div className="max-w-7xl mx-auto bg-white overflow-hidden" >
      <Header ></Header>
      <div className="mt-10" >
        <h1 className="text-3xl font-semibold text-center uppercase text-black "
        data-aos="zoom-in"
        >
          Welcome to Masum <br />
          Fitness{" "}
        </h1>

        <div>
          <h1 className="text-3xl font-thin text-center mt-10 mb-10 text-black">
            Our Trainers
          </h1>

          <Trainers></Trainers>
        </div>

        <Transformation></Transformation>

        <h1 className="text-3xl font-thin text-center mt-10 mb-10 text-black">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mt-5 p-4">
          {datas.map((data) => (
            <Service key={data.id} datas={data}></Service>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Home;
