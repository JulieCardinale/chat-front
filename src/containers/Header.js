/* Imports */
import { connect } from 'react-redux';
import Header from 'components/pages/Home/Header';

/* State : Reading strategy */
const mapStateToProps = (state) => ({
  username: state.users.userDatas.username,
  picture: state.users.userDatas.picture,
});

/* State : Writing strategy */
const mapDispatchToProps = () => ({});

/* Export & connection */
export default connect(mapStateToProps, mapDispatchToProps)(Header);
