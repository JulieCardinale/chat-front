/* Imports */
import { LOAD_START, LOAD_END } from 'actions/load';

/* * * * * * * * * * * * * *
 * * Load Initial state *
 *
 * @description : All load reducers properties.
 *
 * @properties -----------------------------------------------------------------------------
 * - isLoading (bool) => Main loader default true.
 * ------------------------------------------------------------------------------------------
 *
 */
const initialState = {
  isLoading: false,
};

/* * * * * * * * *
 * * Load reducer *
 *
 * @description : All load reducer actions
 *
 * @cases --------------------------------------------------------
 * - LOAD_START     => Start a loader property.
 * - LOAD_END       => Stop a loader property.
 * ----------------------------------------------------------------
 *
 */
const load = (state = initialState, action = {}) => {
  switch (action.type) {
    /* * * * * * * *
     * * LOAD_START *
     *
     * @description : Start a loader property.
     *
     */
    case LOAD_START:
      return {
        ...state,
        [action.loaderKey]: true,
      };
    /* * * * * * *
     * * LOAD_END *
     *
     * @description : Stop a loader property.
     *
     */
    case LOAD_END:
      return {
        ...state,
        [action.loaderKey]: false,
      };
    default:
      return state;
  }
};

// Reducer export
export default load;
