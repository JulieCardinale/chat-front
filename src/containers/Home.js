/* Imports */
import { connect } from 'react-redux';
import Home from 'components/pages/Home';
import { socketConnect } from 'actions/messages';
import { getUserDatas } from 'actions/users';
import { loadStart } from 'actions/load';

/* State : Reading strategy */
const mapStateToProps = (state) => ({
  isLoading: state.load.isLoading,
});

/* State : Writing strategy */
const mapDispatchToProps = (dispatch) => ({
  socketConnect: () => dispatch(socketConnect()),
  getUserDatas: () => dispatch(getUserDatas()),
  loadStart: () => dispatch(loadStart('isLoading')),
});

/* Export & connection */
export default connect(mapStateToProps, mapDispatchToProps)(Home);
