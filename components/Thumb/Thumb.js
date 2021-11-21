import { Image } from './Thumb.style';
//verify props
import PropTypes from 'prop-types';
const Thumb = ({ image, alt, movieId, clickable }) => {
  // console.log('movieID', typeof movieId, movieId);
  return (
    <>
      {/* {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt={alt}></Image>
        </Link>
      ) : ( */}
        <Image src={image} alt={alt}></Image>
      {/* )} */}
    </>
  );
};

Thumb.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};
export default Thumb;
