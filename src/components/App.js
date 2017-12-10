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

    let { currentCoords, polygonCoords } = this.props;

    return (
      <div className="App">
        <FormContainer />
        <LeafletMap
          currentCoords={ currentCoords }
          polygonCoords={ polygonCoords }
        />
      </div>
    );
  }
}

export default App;
