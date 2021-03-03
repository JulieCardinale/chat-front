/* * * * * * * * * * *
 * * Socket connect  *
 *
 * @description : Connect to web socket
 *
 */
export const SOCKET_CONNECT = 'SOCKET_CONNECT';
export const socketConnect = () => ({
  type: SOCKET_CONNECT,
});

/* * * * * * * * * * * * * *
 * * Update messages list  *
 *
 * @description : update client messages list
 *
 * @params : new message
 *
 */
export const UPDATE_MESSAGES_LIST = 'UPDATE_MESSAGES_LIST';
export const updateMessageList = (newMessage) => ({
  type: UPDATE_MESSAGES_LIST,
  newMessage,
});
