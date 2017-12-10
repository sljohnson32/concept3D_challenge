const Polygon = (state = [], action) => {

  switch (action.type) {
    case 'STORE_POLYGON_COORDS':
      let newState = state;
      const index = newState.indexOf(action.coords);

      if (index !== -1) {
        return newState.filter((arr, i) => i !== index);
      } else return newState.concat([action.coords]);

    default:
      return state;
  }
};

export default Polygon;
