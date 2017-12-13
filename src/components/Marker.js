import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import tealdot from '../imgs/tealdot.svg';

let icon = L.icon({
  iconUrl: tealdot,
  iconSize: [15, 15]
});

export default class MapMarker extends Component {

  constructor() {
    super()
    this.state = {
      selectedState: false
    }
  }

  handlePolygonCoords(location) {
    if (this.state.selectedState) {
      this.props.removePolygonCoords(location);
      // this.setState({ selectedState: false })
    } else {
      this.props.storePolygonCoords(location);
    }
    this.setState({ selectedState: !this.state.selectedState })
  }

  render() {

    let { location } = this.props

    return (
      <div className="marker-container">
          <Marker
            icon={icon}
            position={location}
            onClick={() => this.handlePolygonCoords(location)}
          >
            <Tooltip
              sticky
              interactive
            >
              <div>
                <h4>{this.props.name}</h4>
              </div>
            </Tooltip>
          </Marker>
        </div>
    )
  }
}

MapMarker.propTypes = {
  location: PropTypes.arrayOf(PropTypes.number).isRequired,
  storePolygonCoords: PropTypes.func.isRequired,
  removePolygonCoords: PropTypes.func.isRequired
};
