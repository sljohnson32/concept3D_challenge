require('isomorphic-fetch');

const storeAllLocations = (locations) => {
  return {
    type: 'STORE_LOCATIONS',
    data: locations.locations,
  };
};

const storeNewLocation = (location) => {
  console.log('NEW LOCATION', location)
  return {
    type: 'STORE_NEW_LOCATION',
    location
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
      .then(json => dispatch(storeAllLocations(json)));
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
      .then(json => dispatch(storeNewLocation(json)))
  };
};


export { fetchAllLocations, saveLocation }
