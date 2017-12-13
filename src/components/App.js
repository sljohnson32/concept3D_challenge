import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeafletMap from './LeafletMap';
import FormContainer from '../containers/FormContainer';

export default class App extends Component {

  componentDidMount() {
    this.getLocations();
  }

  getLocations() {
    this.props.fetchAllLocations();
  }

  render() {

    let { currentCoords, latLng, polygonCoords, setLatLng } = this.props;

    return (
      <div className="App">
        <FormContainer
          latLng={ latLng }
        />
        <LeafletMap
          currentCoords={ currentCoords }
          polygonCoords={ polygonCoords }
          setLatLng={ setLatLng }
        />
      </div>
    );
  }
}

App.propTypes = {
  currentCoords: PropTypes.objectOf(PropTypes.number),
  latLng: PropTypes.objectOf(PropTypes.number),
  polygonCoords: PropTypes.arrayOf(PropTypes.array),
  setLatLng: PropTypes.func
};
