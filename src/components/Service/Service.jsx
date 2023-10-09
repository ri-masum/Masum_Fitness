import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Service = ({ datas }) => {

  const { service_name,  picture_url,details ,id} = datas;
//   console.log(datas);

 
  return (
    <div className="text-white">
      <div className="card  bg-black shadow-xl h-[450px]">
        <figure>
          <img
            src={picture_url}
            alt="photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-mono text-yellow-300">{service_name}</h2>
         {
            details.length >80 ? 
            <>
             <p className='text-xs'>{details.slice(0,80)}  <Link to={`/details/${id}`}> <span  className="text-yellow-400  font-semibold">full Details</span></Link></p>
           
            </>
            :<p className='text-xs'>{details}</p>
         }
          {/* <div className="card-actions justify-end">
           <Link to={`/details/${id}`}> <p  className="text-yellow-400 ">full Details</p></Link>
          </div>  */}
        </div>
      </div>
    </div>
  );
};

export default Service;
Service.propTypes ={
    datas:PropTypes.object
}