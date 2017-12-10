import React, { Component } from 'react';
const isCoordinates = require('is-coordinates')

class Form extends Component {

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


export default Form;
