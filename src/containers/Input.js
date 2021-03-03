/* Imports */
import { connect } from 'react-redux';
import Input from 'components/reusables/Input';
import { formFieldOnChange } from 'actions/forms';

/* State : Reading strategy */
const mapStateToProps = (state, ownProps) => ({
  value: state.forms[ownProps.formName][ownProps.formKey],
});

/* State : Writing strategy */
const mapDispatchToProps = (dispatch, ownProps) => ({
  formFieldOnChange: (value) =>
    dispatch(formFieldOnChange(ownProps.formName, ownProps.formKey, value)),
});

/* Export & connection */
export default connect(mapStateToProps, mapDispatchToProps)(Input);
