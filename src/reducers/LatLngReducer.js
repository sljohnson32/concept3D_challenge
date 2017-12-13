const LatLng = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LATLNG':
      return action.coords;

    default:
      return state;
  }
};

export default LatLng;
