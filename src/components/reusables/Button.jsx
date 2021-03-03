/* Imports */
import PropTypes from 'prop-types';

/* * * * * * * * * * *
 * * Button component *
 *
 * @description : A button
 *
 * @props --------------------------------------------------------
 * - className (str)                  => custom className
 * - button (bool)                    => is type button ? default submit
 * - text (str)                       => button text
 * - onClickAction (dispatched func)  => action dispatched on click
 * ---------------------------------------------------------------
 *
 */
const Button = ({ className, button, text, onClickAction }) => (
  <button
    className={className}
    type={button ? 'button' : 'submit'}
    onClick={onClickAction}
  >
    {text}
  </button>
);

/* PropTypes */
Button.propTypes = {
  className: PropTypes.string.isRequired,
  button: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onClickAction: PropTypes.func,
};

Button.defaultProps = {
  button: false,
  onClickAction: null,
};

/* Export component */
export default Button;
