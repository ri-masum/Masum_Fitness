
import PropTypes from 'prop-types'
import Aos from 'aos';
import { useEffect } from 'react';

import 'aos/dist/aos.css'

const Photo = ({photos}) => {

  useEffect(()=>{
Aos.init();
  },[])
    // console.log(photos);
    return (
        <div 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        >
            <img src={photos.photo} alt=""  className="w-96"/>
            
        </div>
    );
};

export default Photo;
Photo.propTypes ={
    photos:PropTypes.object
}