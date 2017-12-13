const Polygon = (state = [], action) => {

  switch (action.type) {
    case 'STORE_POLYGON_COORDS':
      return state.concat([action.coords]);

    case 'REMOVE_POLYGON_COORDS':
      return state.filter(coords => coords !== action.coords)

    default:
      return state;
  }
};

export default Polygon;
