/*eslint-disable react/jsx-filename-extension, no-alert, jsx-a11y/label-has-for*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const isCoordinates = require('is-coordinates');

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      disable: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.latLng !== this.props.latLng && nextProps.latLng.lat) {
      const { lat, lng } = nextProps.latLng;
      this.lat.value = lat;
      this.lng.value = lng;
    }
  }

  submitForm(e, data) {
    e.preventDefault();
    const lat = data.lat * 1;
    const lng = data.lng * 1;
    if (isCoordinates([lng, lat], { validate: true })) {
      this.props.storeCurrentCoords({ lat, lng });
      this.props.saveLocation({ name: data.name, lat, lng });
      this.resetForm();
    } else alert(`${lat} and ${lng} are not valid coordinates. Please try again`);
  }

  resetForm() {
    this.name.value = '';
    this.lat.value = '';
    this.lng.value = '';
    this.setState({ disable: true });
  }

  checkInputs(e, data) {
    e.preventDefault();
    const { name, lat, lng } = data;
    if (name !== '' && lat !== '' && lng !== '') {
      this.setState({ disable: false });
    } else this.setState({ disable: true });
  }

  render() {
    return (
      <form
        className="form"
        onChange={e => this.checkInputs(e, {
          name: this.name.value,
          lat: this.lat.value,
          lng: this.lng.value,
        })}
      >
        <label className="name-input">
          Name
          <input
            ref={(input) => { this.name = input; }}
            type="text"
          />
        </label>
        <label>
          Lat
          <input
            ref={(input) => { this.lat = input; }}
            type="text"
          />
        </label>
        <label>
          Lon
          <input
            ref={(input) => { this.lng = input; }}
            type="text"
          />
        </label>
        <button
          type="submit"
          disabled={this.state.disable}
          onClick={e => this.submitForm(e, {
            name: this.name.value,
            lat: this.lat.value,
            lng: this.lng.value,
          })}
        >
            Save
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  latLng: PropTypes.objectOf(PropTypes.number).isRequired,
};
