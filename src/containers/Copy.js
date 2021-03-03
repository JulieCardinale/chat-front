/* Imports */
import { connect } from 'react-redux';
import Copy from 'components/reusables/Copy';
import { setAsCopied } from 'actions/alerts';

/* State : Reading strategy */
const mapStateToProps = (state) => ({
  copiedItemName: state.alerts.copiedItemName,
});

/* State : Writing strategy */
const mapDispatchToProps = (dispatch) => ({
  setAsCopied: (copiedItemName) => dispatch(setAsCopied(copiedItemName)),
});

/* Export & connection */
export default connect(mapStateToProps, mapDispatchToProps)(Copy);
