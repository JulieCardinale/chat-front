/* Imports */
import { connect } from 'react-redux';
import LoginInfos from 'components/pages/Login/LoginInfos';
import { setAsCopied } from 'actions/alerts';

/* State : Reading strategy */
const mapStateToProps = (state) => ({
  isCopied: state.alerts.isCopied,
});

/* State : Writing strategy */
const mapDispatchToProps = (dispatch) => ({
  setAsCopied: (copiedItem) => dispatch(setAsCopied(copiedItem)),
});

/* Export & connection */
export default connect(mapStateToProps, mapDispatchToProps)(LoginInfos);
