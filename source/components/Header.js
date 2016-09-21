import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Five Day Forecast – {this.props.city}</h1>
      </header>
    );
  }
}
