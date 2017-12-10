const initialState = {
  coords: []
};

const Polygon = (state = initialState, action) => {

  switch (action.type) {
    case 'STORE_POLYGON_COORDS':
      let newState = state.coords;
      const index = newState.indexOf(action.coords);

      if (index !== -1) {
        newState = newState.filter((arr, i) => i !== index);
      } else newState = newState.concat([action.coords]);

      return Object.assign({}, state, {
        coords: newState
      });

    default:
      return state;
  }
};

export default Polygon;
