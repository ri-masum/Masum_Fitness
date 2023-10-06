import {  useParams } from "react-router-dom";


const DetailsService = () => {
    // const detailsData=useLoaderData()
    // console.log(detailsData);
    const { service_name, trainer_name, workout_hour, picture_url,details ,id} = useParams()
console.log(service_name);
    return (
        <div className="h-screen">
            details{id}
            
            <img src={picture_url} alt="" />
            <h1>{service_name}</h1>
            <h1>{trainer_name}</h1>
            <h1>{workout_hour}</h1>
            <h1>{details}</h1>
            
        </div>
    );
};

export default DetailsService;