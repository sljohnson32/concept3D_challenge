import React, { Component } from 'react';
import PropTypes from 'prop-types';
const isCoordinates = require('is-coordinates');

export default class Form extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.latLng !== this.props.latLng && nextProps.latLng.lat) {
      console.log('CURRENT', this.props.latLng)
      console.log('NEXT', nextProps.latLng)
      let { lat, lng } = nextProps.latLng;
      this.lat.value = lat;
      this.lng.value = lng;
    }
  }

  submitForm(e, data) {
    e.preventDefault();
    let lat = data.lat * 1;
    let lng = data.lng * 1;
    if (isCoordinates([lng, lat], { validate: true })) {
      this.props.storeCurrentCoords({ lat, lng });
      this.props.saveLocation(data);
      this.resetForm();
    } else alert(`${lat} and ${lng} are not valid coordinates. Please try again`)
  }

  resetForm() {
    this.name.value = '';
    this.lat.value = '';
    this.lng.value = '';
  }

  render() {
    return (
      <form className="form">
        <label>
          Name
          <input
            ref={(input) => { this.name = input }}
            type="text"
          />
        </label>
        <label>
          Lat
          <input
            ref={(input) => { this.lat = input }}
            type="text"
          />
        </label>
        <label>
          Lon
          <input
            ref={(input) => { this.lng = input }}
            type="text"/>
        </label>
        <button
          type="submit"
          onClick={(e) => this.submitForm(e, {
            name: this.name.value,
            lat: this.lat.value,
            lng: this.lng.value
          })}
        >
            Save
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  latLng: PropTypes.objectOf(PropTypes.number).isRequired
};
