/*eslint-disable no-unused-vars, react/jsx-filename-extension, react/no-array-index-key*/
import React from 'react';
import PropTypes from 'prop-types';
import MapMarker from './Marker';

const AllMarkers = ({ locations, storePolygonCoords, removePolygonCoords }) => {
  const markerArray = locations.map((marker, i) => {
    return (
      <MapMarker
        key={i}
        location={[+marker.lat, +marker.lng]}
        name={marker.name}
        storePolygonCoords={storePolygonCoords}
        removePolygonCoords={removePolygonCoords}
      />
    );
  });

  return (
    <div className="paths-container">
      {markerArray}
    </div>
  );
};

AllMarkers.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  storePolygonCoords: PropTypes.func.isRequired,
  removePolygonCoords: PropTypes.func.isRequired,
};

export default AllMarkers;
