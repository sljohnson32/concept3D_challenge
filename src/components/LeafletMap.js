import React, { Component } from 'react';
import { Map, Polygon, TileLayer, ZoomControl } from 'react-leaflet';
import AllMarkers from '../containers/AllMarkersContainer'

class LeafletMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: [39.750809, -104.996810]
    };
  }
  
  render() {

    let { currentCoords, polygonCoords, setLatLng } = this.props;

    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={ currentCoords ? currentCoords : this.state.center }
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}
          onClick={ (e) => setLatLng(e.latlng) }
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom={10}
            minZoom={2}
          />
          <ZoomControl
            position="bottomright"
          />
          <AllMarkers />
          <Polygon
            positions={ polygonCoords }
          />
        </Map>
      </div>
    );
  }
}

export default LeafletMap;
