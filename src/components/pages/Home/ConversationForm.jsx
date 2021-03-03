/* Import(s) */
import { useEffect } from 'react';
import { focusToField } from 'selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Input from 'containers/Input';
import Button from 'components/reusables/Button';

/* * * * * * * * * * * * * * * * *
 * * ConversationForm component *
 *
 * @description : The conversation form.
 *
 * @props --------------------------------------------------------------------------------------
 * - messages (array)                         => Messages list
 * - conversationFormSubmit (func dispatched) => submit form
 * - messageError (string)                    => message error value
 * ---------------------------------------------------------------------------------------------
 *
 * @selectors ----------------------------------------------------------------------------------
 * - focusToField (func) => Focus to a field. Takes a selector as argument
 * ---------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - FontAwesomeIcon       => Plane icon
 * (https://fontawesome.com/how-to-use/on-the-web/using-with/react)
 * - event.preventDefault() => submit form
 * https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault
 * ---------------------------------------------------------------------------------------------
 *
 */
const ConversationForm = ({
  messages,
  conversationFormSubmit,
  messageError,
}) => {
  /* * * * * * * * * * * *
   * * useEffect, handler *
   */
  useEffect(() => focusToField('#message'), [messages]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    conversationFormSubmit();
  };

  /* * * * *
   * * JSX *
   */
  return (
    <form className="chat-conversation-form" onSubmit={handleOnSubmit}>
      {/* CONVERSATION FORM - INPUT */}
      <Input
        className="chat-conversation-form-input"
        type="text"
        formName="conversationForm"
        formKey="message"
        placeholder={messageError || 'Enter your message'}
      />
      {/* CONVERSATION FORM - SUBMIT BUTTON */}
      <Button
        className="chat-conversation-form-button"
        text={<FontAwesomeIcon icon={faPaperPlane} />}
      />
    </form>
  );
};

/* PropTypes */
ConversationForm.propTypes = {
  messages: PropTypes.objectOf(PropTypes.string),
  conversationFormSubmit: PropTypes.func.isRequired,
  messageError: PropTypes.string,
};

ConversationForm.defaultProps = {
  messages: {},
  messageError: '',
};

/* Export component */
export default ConversationForm;
