/* Imports */
import { STORE_USER_DATAS } from 'actions/users';

/* * * * * * * * * * * * *
 * * users Initial state *
 *
 * @description : All users reducers properties.
 *
 * @properties -----------------------------------------------------------------------------
 * - userDatas (obj) => all users datas
 * ------------------------------------------------------------------------------------------
 *
 */
const initialState = {
  userDatas: {
    userId: '',
    username: '',
    picture: '',
  },
};

/* * * * * * * * * *
 * * users reducer *
 *
 * @description : All alerts reducer actions
 *
 * @cases --------------------------------------------------------
 * - STORE_USER_DATAS  => Store user datas to state
 * ----------------------------------------------------------------
 *
 */
const users = (state = initialState, action = {}) => {
  switch (action.type) {
    /* * * * * * * * * * * *
     * * Store user datas  *
     *
     * @description : Store user datas to state
     *
     * @params : user datas
     *
     */
    case STORE_USER_DATAS:
      return {
        ...state,
        userDatas: action.userDatas,
      };
    default:
      return state;
  }
};

/* Export reducer */
export default users;
