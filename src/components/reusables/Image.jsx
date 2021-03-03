/* Import(s) */
import PropTypes from 'prop-types';

/* * * * * * * * * *
 * * Image component *
 *
 * @description : A component to display an image.
 *
 * @props -------------------------------------------------------------------------
 * className (str)     => Image custom className
 * src (str)           => Image source
 * alt (str)           => Image description
 * --------------------------------------------------------------------------------
 */
const Image = ({ className, src, alt }) => (
  <img className={className} src={src} alt={alt} />
);

/* PropTypes validation */
Image.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  src: null,
};

/* Export component */
export default Image;
