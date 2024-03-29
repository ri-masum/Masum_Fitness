import {  Link, useLoaderData, useParams } from "react-router-dom";

import Aos from 'aos';
import { useEffect } from 'react';

import 'aos/dist/aos.css'
const DetailsService = () => {
    useEffect(()=>{
        Aos.init()
      },[])
    const detailsData=useLoaderData()
    console.log(detailsData);
    const {id} = useParams()
    const intID=parseInt(id);
    const detialsTraining=detailsData.find(d=>d.id ===intID)
    // console.log(detialsTraining);
    const {service_name, trainer_name, workout_hour,price, picture_url,details }=detialsTraining
    

    return (
        <div className="min-h-screen text-white max-w-7xl mx-auto ">

            <img src={picture_url} alt="" data-aos="fade-up"/>
            <h1 className="text-4xl mt-10 md:text-right text-yellow-400" data-aos="flip-up"> {service_name}</h1>
            <div className="flex flex-col md:flex-row md:justify-evenly mt-10">
           
            <h1 className="text-3xl">Duiration: <span className="text-yellow-500" data-aos="zoom-in-up">{workout_hour}</span> </h1>
            <h1 className="text-2xl">Trainer Name: {trainer_name}</h1>
            <h1 className="text-2xl ">Price:  <span className="text-yellow-500">{price}</span> </h1>
            
            </div>
           <h1 className="text-center mt-10 mb-3 text-4xl font-extrabold">About the Training</h1>
            <h1 className="textarea-sm" data-aos="fade-up"
     data-aos-duration="3000">{details}</h1>

            <div className=" flex justify-center mt-5">
            <Link to='/' className=" text-yellow-500  text-lg mb-5 hover:cursor-pointer">Go Back</Link>
            
            </div>
        </div>
    );
};

export default DetailsService;