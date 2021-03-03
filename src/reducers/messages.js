/* Imports */
import { UPDATE_MESSAGES_LIST } from 'actions/messages';

/* * * * * * * * * * * * * *
 * * messages Initial state *
 *
 * @description : All messages reducers properties.
 *
 * @properties -----------------------------------------------------------------------------
 * - messagesList (array)   => messages list
 * ------------------------------------------------------------------------------------------
 *
 */
const initialState = {
  messagesList: [],
};

/* * * * * * * * * * *
 * * messages reducer *
 *
 * @description: All alerts reducer actions
 *
 * @cases --------------------------------------------------------
 * - UPDATE_MESSAGES_LIST => update client messages list
 * ----------------------------------------------------------------
 *
 */
const messages = (state = initialState, action = {}) => {
  switch (action.type) {
    /* * * * * * * * * * * * * *
     * * Update messages list  *
     *
     * @description: update client messages list
     *
     * @params: new message
     *
     */
    case UPDATE_MESSAGES_LIST: {
      const newMessages = [...state.messagesList];
      newMessages.push(action.newMessage);
      return {
        ...state,
        messagesList: newMessages,
      };
    }
    default:
      return state;
  }
};

/* Export reducer */
export default messages;
