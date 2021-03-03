/* * * * * * * * * * *
 * * Get user datas  *
 *
 * @description : get user personnal datas
 *
 */
export const GET_USER_DATAS = 'GET_USER_DATAS';
export const getUserDatas = () => ({
  type: GET_USER_DATAS,
});

/* * * * * * * * * * * *
 * * Store user datas  *
 *
 * @description : Store user datas to state
 *
 * @params : user datas
 *
 */
export const STORE_USER_DATAS = 'STORE_USER_DATAS';
export const storeUserDatas = (userDatas) => ({
  type: STORE_USER_DATAS,
  userDatas,
});
