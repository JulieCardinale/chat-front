/* Imports */
import { connect } from 'react-redux';
import MessagesList from 'components/pages/Home/MessagesList';

/* State : Reading strategy */
const mapStateToProps = (state) => ({
  messagesList: state.messages.messagesList,
});

/* State : Writing strategy */
export default connect(mapStateToProps)(MessagesList);
