import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Service = ({ datas }) => {

  const { service_name, trainer_name, workout_hour, picture_url,details ,id} = datas;
//   console.log(datas);

 
  return (
    <div className="text-white">
      <div className="card  bg-gray-800 shadow-xl h-[450px]">
        <figure>
          <img
            src={picture_url}
            alt="photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service_name}</h2>
         {
            details.length >80 ?  <p className='text-xs'>{details.slice(0,80)}</p> :<p className='text-xs'>{details}</p>
         }
          <div className="card-actions justify-end">
           <Link to={`/details/${id}`}> <button  className="btn ">full Details</button></Link>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Service;
Service.propTypes ={
    datas:PropTypes.array
}