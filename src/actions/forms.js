/* * * * * * * * * * * * *
 * * Form field on change *
 *
 * @description : handle every form fields
 *
 * @params ----------------------------------------------------------
 * - fieldFormName (str)  => Form name
 * - fieldKey (str)       => Field key
 * - fieldValue (str)     => Field value
 * ------------------------------------------------------------------
 *
 */
export const FORM_FIELD_ON_CHANGE = 'FORM_FIELD_ON_CHANGE';
export const formFieldOnChange = (fieldFormName, fieldKey, fieldValue) => ({
  type: FORM_FIELD_ON_CHANGE,
  fieldFormName,
  fieldKey,
  fieldValue,
});

/* * * * * * * * * * * * * *
 * * User login form reset  *
 *
 * @description : Reset login form
 *
 */
export const LOGIN_FORM_RESET = 'LOGIN_FORM_RESET';
export const loginFormReset = () => ({
  type: LOGIN_FORM_RESET,
});

/* * * * * * * * * * * * * *
 * * User login form submit  *
 *
 * @description : login form submit
 *
 */
export const LOGIN_FORM_SUBMIT = 'LOGIN_FORM_SUBMIT';
export const loginFormSubmit = () => ({
  type: LOGIN_FORM_SUBMIT,
});

/* * * * * * * * * * * * * * * *
 * * Conversation form submit  *
 *
 * @description : Conversation form form submit
 *
 */
export const CONVERSATION_FORM_SUBMIT = 'CONVERSATION_FORM_SUBMIT';
export const conversationFormSubmit = () => ({
  type: CONVERSATION_FORM_SUBMIT,
});

/* * * * * * * * * * * * * * *
 * * Conversation form reset  *
 *
 * @description : Reset conversation form
 *
 */
export const CONVERSATION_FORM_RESET = 'CONVERSATION_FORM_RESET';
export const conversationFormReset = () => ({
  type: CONVERSATION_FORM_RESET,
});
