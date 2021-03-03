/* Imports */
import axios from 'axios';

/* * * * * * * * *
 * * SERVER URL *
 *
 * @description : url of the server
 *
 */
export const baseURL = 'https://jcdle-chat-api.herokuapp.com';

/* * * * * * * *
 * * API CLIENT *
 *
 * @description : Axios instance for basic api request
 *
 */
export const ApiClient = axios.create({
  baseURL,
});

/* * * * * * * * * * * * * *
 * * API CLIENT USER TOKEN *
 *
 * @description : Axios instance for api request with token
 *
 */
const { connectedUserToken } = sessionStorage;
export const ApiClientUserToken = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${connectedUserToken}` },
});
