/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */

/* Import(s) */
import users from 'middlewares/users';
import messages from 'middlewares/messages';

/* * * * * * * * * * * *
 * * combineMiddlewares *
 *
 * @infos : We use multiple middlewares in one file
 *
 */
const combineMiddlewares = [
    users,
    messages,
];

/* Export */
export default combineMiddlewares;
