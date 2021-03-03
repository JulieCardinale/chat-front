/* Imports */
import { connect } from 'react-redux';
import LoginForm from 'components/pages/Login/LoginForm';
import { loginFormSubmit } from 'actions/forms';
import { loginFormResetErrors } from 'actions/alerts';

/* State : Reading strategy */
const mapStateToProps = (state) => ({
  emailErrorMessage: state.alerts.loginFormErrors.emailErrorMessage,
  passwordErrorMessage: state.alerts.loginFormErrors.passwordErrorMessage,
});

/* State : Writing strategy */
const mapDispatchToProps = (dispatch) => ({
  loginFormSubmit: () => dispatch(loginFormSubmit()),
  loginFormResetErrors: () => dispatch(loginFormResetErrors()),
});

/* Export & connection */
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
