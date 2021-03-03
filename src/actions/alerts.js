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
export const SET_AS_COPIED = 'SET_AS_COPIED';
export const setAsCopied = (copiedItemName) => ({
  type: SET_AS_COPIED,
  copiedItemName,
});

/* * * * * * * * * * * * * * * * * *
 * * User login form reset errors *
 *
 * @description : Reset login form errors
 *
 */
export const LOGIN_FORM_RESET_ERRORS = 'LOGIN_FORM_RESET_ERRORS';
export const loginFormResetErrors = () => ({
  type: LOGIN_FORM_RESET_ERRORS,
});

/* * * * * * * * * * * * * * * * * * *
 * * User login form set email error *
 *
 * @description : Display error message for email input in login form
 * @params ----------------------------------------------------------
 * - emailErrorMessage (str) => error message value
 * ------------------------------------------------------------------
 *
 */
export const LOGIN_FORM_SET_EMAIL_ERROR = 'LOGIN_FORM_SET_EMAIL_ERROR';
export const loginFormSetEmailError = (emailErrorMessage) => ({
  type: LOGIN_FORM_SET_EMAIL_ERROR,
  emailErrorMessage,
});

/* * * * * * * * * * * * * * * * * * * * *
 * * User login form set password error *
 *
 * @description : Display error message for password input in login form
 * @params ----------------------------------------------------------
 * - passwordErrorMessage (str) => error message value
 * ------------------------------------------------------------------
 *
 */
export const LOGIN_FORM_SET_PASSWORD_ERROR = 'LOGIN_FORM_SET_PASSWORD_ERROR';
export const loginFormSetPasswordError = (passwordErrorMessage) => ({
  type: LOGIN_FORM_SET_PASSWORD_ERROR,
  passwordErrorMessage,
});

/* * * * * * * * * * * * * * * * * * * *
 * * Conversation form set reset errors *
 *
 * @description : Reset conversation form errors
 *
 */
export const CONVERSATION_FORM_RESET_ERRORS = 'CONVERSATION_FORM_RESET_ERRORS';
export const conversationFormResetErrors = () => ({
  type: CONVERSATION_FORM_RESET_ERRORS,
});

/* * * * * * * * * * * * * * * * * * * * *
 * * Conversation form set message error *
 *
 * @description : Display error message in conversation form
 *
 * @params ----------------------------------------------------------
 * - messageError (str) => error message value
 * ------------------------------------------------------------------
 *
 */
export const CONVERSATION_FORM_SET_MESSAGE_ERROR =
  'CONVERSATION_FORM_SET_MESSAGE_ERROR';
export const conversationFormSetMessageError = (messageError) => ({
  type: CONVERSATION_FORM_SET_MESSAGE_ERROR,
  messageError,
});
