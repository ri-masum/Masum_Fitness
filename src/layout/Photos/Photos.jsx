import { useLoaderData } from "react-router-dom";
import Photo from "./Photo";


const Photos = () => {

    const photos=useLoaderData();
    // console.log(photos);
    return (



     <div>
 <h1 className="text-3xl font-thin text-center mt-10 mb-10 text-white">
            Some Of Our recent Photos
          </h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {
                photos.map(photo=><Photo key={photo.id} photos={photo}></Photo>)
            }
            
        </div>
     </div>
    );
};

export default Photos;