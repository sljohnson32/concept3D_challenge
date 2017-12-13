import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../components/Form';
import { saveLocation, storeCurrentCoords } from '../actions/locationActions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveLocation, storeCurrentCoords }, dispatch);
};

export default connect(null, mapDispatchToProps)(Form);
