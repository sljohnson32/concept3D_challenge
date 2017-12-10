require('isomorphic-fetch');

const storeAllLocations = (locations) => {
  console.log(locations)
  return {
    type: 'STORE_LOCATIONS',
    data: locations,
  };
};

const storeCurrentCoords = (coords) => {
  return {
    type: 'STORE_CURRENT_COORDS',
    coords
  };
};

const storePolygonCoords = (coords) => {
  return {
    type: 'STORE_POLYGON_COORDS',
    coords
  };
};

const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(locations => locations.json())
      .then(json => dispatch(storeAllLocations(json.locations)));
  };
};

const saveLocation = (location) => {
  return (dispatch) => {
    return fetch('/locations', {
      method: 'POST',
      body: JSON.stringify(location),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
      .then(data => data.json())
      .then(json => dispatch(storeAllLocations(json)))
  };
};


export { fetchAllLocations, saveLocation, storeCurrentCoords, storePolygonCoords }
