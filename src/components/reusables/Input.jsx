/* Import(s) */
import { cleanInput } from 'selectors';
import PropTypes from 'prop-types';

/* * * * * * * * * *
 * * Input component *
 *
 * @description : A reusable input
 *
 * @props -------------------------------------------------------------------------
 * className (str)                      => input custom className
 * label (str)                          => input label
 * type (str)                           => input type
 * formKey (str)                        => input key in form
 * value (str)                          => input value
 * placeholder (str)                    => input placeholder
 * formFieldOnChange (dispatched func)  => change state with input value
 * errorMessage (str)                   => input error message
 * --------------------------------------------------------------------------------
 */
const Input = ({
  className,
  label,
  type,
  formKey,
  value,
  placeholder,
  formFieldOnChange,
  errorMessage,
}) => (
  <div className={className}>
    {/* LABEL */}
    {label && (
      <label className={`${className}__label`} htmlFor={formKey}>
        {label}
      </label>
    )}

    {/* INPUT */}
    <input
      className={`${className}__input`}
      type={type}
      name={formKey}
      id={formKey}
      value={cleanInput(value)}
      placeholder={placeholder}
      onChange={(e) => formFieldOnChange(e.target.value)}
      autoComplete=""
    />

    {/* ERROR */}
    {errorMessage !== '' && (
      <div className={`${className}__error-message`}>{errorMessage}</div>
    )}
  </div>
);

/* PropTypes validation */
Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  formKey: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  formFieldOnChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  label: '',
  type: '',
  formKey: '',
  value: '',
  placeholder: '',
  errorMessage: '',
};

/* Export component */
export default Input;
