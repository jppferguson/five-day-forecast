import React, {Component} from 'react';
import moment from 'moment';

export default class ForecastItem extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      time: null
    }
  }

  componentDidMount() {
    this.setState({
      time: moment.unix(this.props.data.dt).format("ha")
    });
  }

  render() {

    require('./Forecast.scss');

    return (
      <div className="ForecastItem">
        <div className="time">{this.state.time}</div>
        <h4 className="temp">{this.props.data.weather[0].main}</h4>
        <small>{this.props.data.weather[0].description}</small>
        <div className="temp">{this.props.data.main.temp}</div>
      </div>
    );
  }
}
