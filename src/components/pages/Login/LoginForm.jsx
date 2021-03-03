/* Import(s) */
import PropTypes from 'prop-types';
import Input from 'containers/Input';
import Button from 'components/reusables/Button';

/* * * * * * * * * * * * *
 * * LoginForm component *
 *
 * @description : Login form
 *
 * @props --------------------------------------------------------------
 * - loginFormSubmit (dispatched func)       => submit login form
 * - loginFormResetErrors (dispatched func)  => reset login form errors
 * - emailErrorMessage (str)                 => email error message
 * - passwordErrorMessage (str)              => password error message
 * ---------------------------------------------------------------
 *
 * @use ---------------------------------------------------------------------------------------------------
 * - event.preventDefault() => submit form
 * https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault
 * ----------------------------------------------------------------------------------------------------------
 *
 */
const LoginForm = ({
  loginFormSubmit,
  loginFormResetErrors,
  emailErrorMessage,
  passwordErrorMessage,
}) => {
  /* * * * * * *
   * * handler *
   */
  const handleOnSubmit = (event) => {
    event.preventDefault();
    loginFormSubmit();
    loginFormResetErrors();
  };

  /* * * * *
   * * JSX *
   */
  return (
    <div className="chat-login-form">
      <form onSubmit={handleOnSubmit}>
        {/* LOGIN FORM - EMAIL */}
        <Input
          className="chat-login-form-input"
          label="Email"
          type="email"
          formName="loginForm"
          formKey="email"
          placeholder="enter your email"
          errorMessage={emailErrorMessage}
        />

        {/* LOGIN FORM - PASSWORD */}
        <Input
          className="chat-login-form-input"
          label="Password"
          type="password"
          formName="loginForm"
          formKey="password"
          placeholder="enter your password"
          errorMessage={passwordErrorMessage}
        />
        {/* SUBMIT BUTTON */}
        <div className="chat-login-form__button">
          <Button className="chat-login-form-button" text="Connexion" />
        </div>
      </form>
    </div>
  );
};

/* PropTypes validation */
LoginForm.propTypes = {
  loginFormSubmit: PropTypes.func.isRequired,
  loginFormResetErrors: PropTypes.func.isRequired,
  emailErrorMessage: PropTypes.string.isRequired,
  passwordErrorMessage: PropTypes.string.isRequired,
};

/* Export component */
export default LoginForm;
