const initialState = {
  data: [],
};

const Locations = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_LOCATIONS':
      // store an array of locations to state
      return Object.assign({}, state, {
        data: state.data.concat(action.data),
      });

    case 'STORE_NEW_LOCATION':
      const newLocations = state.data.push(action.data)
      return Object.assign({}, state, newLocations);

    default:
      return state;
  }
};

export default Locations;
