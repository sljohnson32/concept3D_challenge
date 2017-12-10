import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../style/App.css';
import { fetchAllLocations, setLatLng } from '../actions/locationActions';
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    locations: state.Locations.data,
    currentCoords: state.Locations.currentCoords,
    latLng: state.LatLng,
    polygonCoords: state.Polygon
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllLocations, setLatLng }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
