const initialState = {
  data: [],
};

const Locations = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_LOCATIONS':
      return Object.assign({}, state, {
        data: state.data.concat(action.data),
      });

    case 'STORE_CURRENT_COORDS':
      return Object.assign({}, state, {
        currentCoords: action.coords,
      });

    default:
      return state;
  }
};

export default Locations;
