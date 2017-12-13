import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AllMarkers from '../components/AllMarkers';
import { storePolygonCoords, removePolygonCoords } from '../actions/locationActions';

const mapStateToProps = (state) => {
  return { locations: state.Locations.data };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ storePolygonCoords, removePolygonCoords }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMarkers);
