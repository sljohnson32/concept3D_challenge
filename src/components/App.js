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

    return (
      <div className="App">
        <FormContainer />
        <LeafletMap />
      </div>
    );
  }
}

export default App;
