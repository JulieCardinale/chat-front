/* Import(s) */
import {
  loginFormSetEmailError,
  loginFormSetPasswordError,
} from 'actions/alerts';
import { LOGIN_FORM_SUBMIT, loginFormReset } from 'actions/forms';
import { loadEnd } from 'actions/load';
import { GET_USER_DATAS, storeUserDatas } from 'actions/users';
import { ApiClient, ApiClientUserToken } from 'middlewares/requestsConfig';

/* * * * * * * * * * *
 * * Users middleware *
 *
 * @description : Api calls for users
 *
 * @cases --------------------------------------------------------
 * - LOGIN_FORM_SUBMIT        => API CALL for user login
 * - GET_USER_DATAS           => API CALL to get user datas
 * ---------------------------------------------------------------
 *
 */
const users = (store) => (next) => (action) => {
  switch (action.type) {
    /* * * * * * * * * * * * * *
     * * LOGIN_FORM_SUBMIT *
     *
     * @description : API CALL for user login
     *
     */
    case LOGIN_FORM_SUBMIT: {
      // get datas from state
      const { email, password } = store.getState().forms.loginForm;

      /* * * * * * * * *
       * * API POST ✉️ *
       */
      ApiClient.post('/user/login', { email, password })
        .then((response) => {
          /* * * * * * * *
           * * Success 🎉 *
           *
           * @description : store userData to session storage & redirect to '/'
           *
           */
          if (response.status === 200) {
            sessionStorage.setItem('userIsLogged', true);
            sessionStorage.setItem('connectedUserToken', response.data.token);
            sessionStorage.setItem('connectedUserId', response.data.userId);
            window.location = '/';
          }
        })
        .catch((error) => {
          /* * * * * * * *
           * * Error 😨 *
           *
           * @description : display appropriate error message
           *
           */
          const errorMessage = error.response.data.error;
          switch (errorMessage) {
            case 'Email is required.':
              store.dispatch(loginFormSetEmailError(errorMessage));
              break;
            case 'User not found.':
              store.dispatch(loginFormSetEmailError(errorMessage));
              break;
            case 'Password is required.':
              store.dispatch(loginFormSetPasswordError(errorMessage));
              break;
            case 'Wrong password.':
              store.dispatch(loginFormSetPasswordError(errorMessage));
              break;
            default:
              // eslint-disable-next-line no-console
              console.log(errorMessage);
          }
          store.dispatch(loginFormReset());
        })
        .finally(() => {});
      next(action);
      break;
    }
    /* * * * * * * * * *
     * * GET_USER_DATAS *
     *
     * @description : API CALL to get user datas
     *
     */
    case GET_USER_DATAS: {
      // get datas from sessionStorage
      const { connectedUserId } = sessionStorage;

      /* * * * * * * * *
       * * API GET 📩 *
       */
      ApiClientUserToken.get(`/user/${connectedUserId}`)
        .then((response) => {
          /* * * * * * * *
           * * Success 🎉 *
           *
           * @description : store user datas. After 10min refresh the page to check user infos.
           *
           */
          if (response.status === 200) {
            store.dispatch(storeUserDatas(response.data));
            setTimeout(() => window.location.reload(), 600001);
          }
        })
        /* * * * * * * *
         * * Error 😨 *
         *
         * @description : clear session storage, redirect to '/'
         *
         */
        .catch(() => {
          sessionStorage.clear();
          window.location = '/login';
        })
        /* * * * * * * *
         * * Finally ⌛ *
         *
         * @description : Stop loading mode.
         *
         */
        .finally(() => {
          setTimeout(() => {
            store.dispatch(loadEnd('isLoading'));
          }, 1000);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

/* Export middleware */
export default users;
