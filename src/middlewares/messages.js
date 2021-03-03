/* Import(s) */
import date from 'date-and-time';
import { SOCKET_CONNECT, updateMessageList } from 'actions/messages';
import { CONVERSATION_FORM_SUBMIT, conversationFormReset } from 'actions/forms';
import {
  conversationFormSetMessageError,
  conversationFormResetErrors,
} from 'actions/alerts';
import { baseURL } from 'middlewares/requestsConfig';

let socket;
const { connectedUserToken, connectedUserId } = sessionStorage;

/* * * * * * * * * * * * *
 * * messages middleware *
 *
 * @description : Socket connect & send messages
 *
 * @cases --------------------------------------------------------
 * - SOCKET_CONNECT           => Connect to socket io
 * - CONVERSATION_FORM_SUBMIT => Send message to socket io
 * ---------------------------------------------------------------
 *
 */
const messages = (store) => (next) => (action) => {
  switch (action.type) {
    /* * * * * * * * * *
     * * SOCKET_CONNECT *
     *
     * @description : Connect to socket io
     * @dispatch : updateMessageList()
     *
     */
    case SOCKET_CONNECT: {
      // Connect to socket
      socket = window.io(`${baseURL}`, { query: { connectedUserToken } });
      /* * * * * * * *
       * * Success 🎉 *
       *
       * @description : Recieve new message from socket & store to state
       *
       */
      socket.on('send_message', (newMessage) => {
        store.dispatch(updateMessageList(newMessage));
      });

      /* * * * * * * *
       * * Error 😨 *
       *
       * @description : clear session storage, redirect to '/'
       *
       */
      socket.on('error', () => {
        sessionStorage.clear();
        window.location = '/login';
      });
      break;
    }
    /* * * * * * * * * * * * * * *
     * * CONVERSATION_FORM_SUBMIT *
     *
     * @description : Send message to socket io
     *
     */
    case CONVERSATION_FORM_SUBMIT: {
      // Get message datas from state
      const { message } = store.getState().forms.conversationForm;
      const { username, picture } = store.getState().users.userDatas;

      // Prepare new message
      const newMessage = {
        authorId: connectedUserId,
        author: username,
        content: message,
        picture,
        date: date.format(new Date(), 'YYYY/MM/DD HH:mm:ss'),
      };

      // if message content it not empty send to web socket
      switch (newMessage.content) {
        case '':
          store.dispatch(
            conversationFormSetMessageError("You can't send empty messages.")
          );
          break;
        default:
          store.dispatch(conversationFormResetErrors());
          store.dispatch(conversationFormReset());
          socket.emit('send_message', newMessage);
      }
      break;
    }
    default:
      next(action);
      break;
  }
};

/* Export middleware */
export default messages;
