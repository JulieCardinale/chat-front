/* Imports */
import {
  LOGIN_FORM_SET_EMAIL_ERROR,
  LOGIN_FORM_SET_PASSWORD_ERROR,
  LOGIN_FORM_RESET_ERRORS,
  CONVERSATION_FORM_SET_MESSAGE_ERROR,
  CONVERSATION_FORM_RESET_ERRORS,
  SET_AS_COPIED,
} from 'actions/alerts';

/* * * * * * * * * * * * * *
 * * alerts Initial state *
 *
 * @description : All projects reducers properties.
 *
 * @properties -----------------------------------------------------------------------------
 * - loginFormErrors (obj)            => errors messages for login form
 * - conversationFormErrors (object)  => errors messages for conversation form
 * - copiedItemName (str)             => name of the copied item
 * ------------------------------------------------------------------------------------------
 *
 */
const initialState = {
  loginFormErrors: {
    emailErrorMessage: '',
    passwordErrorMessage: '',
  },
  conversationFormErrors: {
    messageError: '',
  },
  copiedItemName: '',
};

/* * * * * * * * * * *
 * * alerts reducer *
 *
 * @description : All alerts reducer actions
 *
 * @cases ------------------------------------------------------------------------------------------------
 * - LOGIN_FORM_RESET_ERRORS             => Reset login form errors
 * - LOGIN_FORM_SET_EMAIL_ERROR          => Display error message for email input in login form
 * - LOGIN_FORM_SET_PASSWORD_ERROR       => Display error message for password input in login form
 * - CONVERSATION_FORM_RESET_ERRORS      => Reset conversation form errors
 * - CONVERSATION_FORM_SET_MESSAGE_ERROR => Display error message in conversation form
 * - SET_AS_COPIED                       => Store to state the name of the copied element
 * -------------------------------------------------------------------------------------------------------
 *
 */
const alerts = (state = initialState, action = {}) => {
  switch (action.type) {
    /* * * * * * * * * * * * * * * * *
     * * User login form reset errors *
     *
     * @description : Reset login form errors
     *
     */
    case LOGIN_FORM_RESET_ERRORS:
      return {
        ...state,
        loginFormErrors: {
          ...state.loginFormErrors,
          emailErrorMessage: '',
          passwordErrorMessage: '',
        },
      };
    /* * * * * * * * * * * * * * * * * * *
     * * User login form set email error *
     *
     * @description : Display error message for email input in login form
     * @params ----------------------------------------------------------
     * - emailErrorMessage (str) => error message value
     * ------------------------------------------------------------------
     *
     */
    case LOGIN_FORM_SET_EMAIL_ERROR:
      return {
        ...state,
        loginFormErrors: {
          ...state.loginFormErrors,
          emailErrorMessage: action.emailErrorMessage,
        },
      };
    /* * * * * * * * * * * * * * * * * * * * *
     * * User login form set password error *
     *
     * @description : Display error message for password input in login form
     * @params ----------------------------------------------------------
     * - passwordErrorMessage (str) => error message value
     * ------------------------------------------------------------------
     *
     */
    case LOGIN_FORM_SET_PASSWORD_ERROR:
      return {
        ...state,
        loginFormErrors: {
          ...state.loginFormErrors,
          passwordErrorMessage: action.passwordErrorMessage,
        },
      };
    /* * * * * * * * * * * * * * * * * * * *
     * * Conversation form set reset errors *
     *
     * @description : Reset conversation form errors
     *
     */
    case CONVERSATION_FORM_RESET_ERRORS:
      return {
        ...state,
        conversationFormErrors: {
          ...state.conversationFormErrors,
          messageError: '',
        },
      };
    /* * * * * * * * * * * * * * * * *
     * * Conversation form set message error *
     *
     * @description : Display error message in conversation form
     *
     * @params ----------------------------------------------------------
     * - messageError (str) => error message value
     * ------------------------------------------------------------------
     *
     */
    case CONVERSATION_FORM_SET_MESSAGE_ERROR:
      return {
        ...state,
        conversationFormErrors: {
          ...state.conversationFormErrors,
          messageError: action.messageError,
        },
      };
    /* * * * * * * * * *
     * * Set as Copied *
     *
     * @description : Store to state the name of the copied element
     *
     * @params ----------------------------------------------------------
     * - copiedItemName (str) => the copied item name
     * ------------------------------------------------------------------
     *
     */
    case SET_AS_COPIED:
      return {
        ...state,
        copiedItemName: action.copiedItemName,
      };
    default:
      return state;
  }
};

/* Export reducer */
export default alerts;
