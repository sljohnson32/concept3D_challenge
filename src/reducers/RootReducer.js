import { combineReducers } from 'redux';
import LatLng from './LatLngReducer';
import Locations from './LocationsReducer';
import Polygon from './PolygonReducer';


const RootReducer = combineReducers({
  LatLng,
  Locations,
  Polygon,
});

export default RootReducer;
