import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Form from '../components/Form'
import { saveLocation } from '../actions/locationActions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveLocation }, dispatch);
};

export default connect(null, mapDispatchToProps)(Form);
