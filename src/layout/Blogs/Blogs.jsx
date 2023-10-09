import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Blogs = () => {
    useEffect(()=>{
        Aos.init()
    },[])

    const trainers=useLoaderData()
    // console.log(trainers);
    return (
        <div className="max-w-7xl mx-auto"
        data-aos="fade-up"




        >
            {
                trainers.map(trainer=><Blog key={trainer.id} trainers={trainer}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;