/* Imports */
import { connect } from 'react-redux';
import ConversationForm from 'components/pages/Home/ConversationForm';
import { conversationFormSubmit } from 'actions/forms';

/* State : Reading strategy */
const mapStateToProps = (state) => ({
  inputValue: state.messages.messageValue,
  messageError: state.alerts.conversationFormErrors.messageError,
  messages: state.messages.messages,
});

/* State : Writing strategy */
const mapDispatchToProps = (dispatch) => ({
  conversationFormSubmit: () => dispatch(conversationFormSubmit()),
});

/* Export & connection */
export default connect(mapStateToProps, mapDispatchToProps)(ConversationForm);
