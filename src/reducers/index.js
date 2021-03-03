/* Import(s) */
import { combineReducers } from 'redux';
import alerts from 'reducers/alerts';
import forms from 'reducers/forms';
import load from 'reducers/load';
import messages from 'reducers/messages';
import users from 'reducers/users';

/* Exports all reducers */
export default combineReducers({
  alerts,
  forms,
  load,
  messages,
  users,
});
