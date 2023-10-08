import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {

    const trainers=useLoaderData()
    // console.log(trainers);
    return (
        <div>
            {
                trainers.map(trainer=><Blog key={trainer.id} trainers={trainer}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;