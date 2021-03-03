/* Imports */
import {
  FORM_FIELD_ON_CHANGE,
  LOGIN_FORM_RESET,
  CONVERSATION_FORM_RESET,
} from 'actions/forms';

/* * * * * * * * * * * * *
 * * forms Initial state *
 *
 * @description : All forms reducers properties.
 *
 * @properties -----------------------------------------------------------------------------
 * - loginForm (obj)               => login form content
 * - conversationForm (object)     => conversation form content
 * ------------------------------------------------------------------------------------------
 *
 */
export const initialState = {
  loginForm: {
    email: '',
    password: '',
  },
  conversationForm: {
    message: '',
  },
};

/* * * * * * * * * *
 * * forms reducer *
 *
 * @description : All forms reducer actions
 *
 * @cases --------------------------------------------------------
 * - FORM_FIELD_ON_CHANGE     => handle every form fields
 * - LOGIN_FORM_RESET         => Reset login form
 * - CONVERSATION_FORM_RESET  => Reset conversation form
 * ----------------------------------------------------------------
 *
 */
const forms = (state = initialState, action = {}) => {
  switch (action.type) {
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
    case FORM_FIELD_ON_CHANGE:
      return {
        ...state,
        [action.fieldFormName]: {
          ...state[action.fieldFormName],
          [action.fieldKey]: action.fieldValue,
        },
      };
    /* * * * * * * * * * * * * *
     * * User login form reset  *
     *
     * @description : Reset login form
     *
     */
    case LOGIN_FORM_RESET:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          email: '',
          password: '',
        },
      };
    /* * * * * * * * * * * * * * *
     * * Conversation form reset  *
     *
     * @description : Reset conversation form
     *
     */
    case CONVERSATION_FORM_RESET:
      return {
        ...state,
        conversationForm: {
          ...state.conversationForm,
          message: '',
        },
      };
    default:
      return state;
  }
};

/* Export reducer */
export default forms;
