import React, { Component } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet'
import tealdot from '../imgs/tealdot.svg'

let icon = L.icon({
  iconUrl: tealdot,
  iconSize: [15, 15]
});

class MapMarker extends Component {

  render() {

    let { location, storePolygonCoords } = this.props

    return (
      <div className="marker-container">
          <Marker
            icon={icon}
            position={location}
            onClick={() => storePolygonCoords(location)}
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

export default MapMarker;
