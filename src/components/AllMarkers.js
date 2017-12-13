/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MapMarker from './Marker'

export default class AllMarkers extends Component {

  render() {
    const markerArray = this.props.locations.map((marker, i) => {
      return (
        <MapMarker
          key={i}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
          storePolygonCoords={ this.props.storePolygonCoords }
          removePolygonCoords={ this.props.removePolygonCoords }
        />
      )
    })

    return (
      <div className="paths-container">
        {markerArray}
      </div>
    );
  }
}

AllMarkers.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  storePolygonCoords: PropTypes.func.isRequired,
  removePolygonCoords: PropTypes.func.isRequired
};
