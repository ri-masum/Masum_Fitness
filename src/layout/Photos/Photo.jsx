
import PropTypes from 'prop-types'
const Photo = ({photos}) => {
    // console.log(photos);
    return (
        <div>
            <img src={photos.photo} alt=""  className="w-96"/>
            
        </div>
    );
};

export default Photo;
Photo.propTypes ={
    photos:PropTypes.object
}