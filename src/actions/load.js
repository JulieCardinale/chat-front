/* * * * * * * * * * * *
 * * Load Start action *
 *
 * @description : Switch a loader property to true
 *
 * @params ----------------------------------------------------------
 * - loaderKey (str) => name of the state property to switch to true
 * ------------------------------------------------------------------
 *
 */
export const LOAD_START = 'LOAD_START';
export const loadStart = (loaderKey) => ({
  type: LOAD_START,
  loaderKey,
});

/* * * * * * * * * * *
 * * Load End action *
 *
 * @description : Switch a loader property to false
 *
 * @params ----------------------------------------------------------
 * - loaderKey (str) => name of the state property to switch to false
 * ------------------------------------------------------------------
 *
 */
export const LOAD_END = 'LOAD_END';
export const loadEnd = (loaderKey) => ({
  type: LOAD_END,
  loaderKey,
});
