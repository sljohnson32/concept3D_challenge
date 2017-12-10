import React, { Component } from 'react';
import LeafletMap from './LeafletMap';
import FormContainer from '../containers/FormContainer';

class App extends Component {

  componentDidMount() {
    this.getLocations();
  }

  getLocations() {
    this.props.fetchAllLocations();
  }

  render() {

    let { currentCoords, polygonCoords, setLatLng } = this.props;

    return (
      <div className="App">
        <FormContainer />
        <LeafletMap
          currentCoords={ currentCoords }
          polygonCoords={ polygonCoords }
          setLatLng={ setLatLng }
        />
      </div>
    );
  }
}

export default App;
