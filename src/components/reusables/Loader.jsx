/* Import(s) */
import PropTypes from 'prop-types';
import Image from 'components/reusables/Image';
import loader from 'images/loader.svg';

/* * * * * * * * * * *
 * * Loader component *
 *
 * @description : svg/gif displayed on loading mode
 *
 * @props -------------------------------------------------------------------------
 * active (bool) => the loader active props
 * --------------------------------------------------------------------------------
 */
const Loader = ({ active }) =>
  active && <Image className="chat-loader" src={loader} alt="loader" />;

/* PropTypes */
Loader.propTypes = {
  active: PropTypes.bool.isRequired,
};

/* Export component */
export default Loader;
