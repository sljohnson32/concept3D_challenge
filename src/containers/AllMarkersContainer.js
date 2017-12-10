/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AllMarkers from '../components/AllMarkers';
import { storePolygonCoords } from '../actions/locationActions';

const mapStateToProps = (state) => {
  return { locations: state.Locations.data }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ storePolygonCoords }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMarkers);
