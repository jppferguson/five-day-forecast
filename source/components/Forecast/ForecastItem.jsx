import React, {Component} from 'react';
import moment from 'moment';

export default class ForecastItem extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      classNames: null,
      time: null
    }
  }

  componentDidMount() {
    this.setState({
      time: moment.unix(this.props.data.dt).format("ha"),
      classNames: "owf owf-3x owf-" + this.props.data.weather[0].id + '-' + this.props.data.sys.pod
    });
  }

  render() {

    require('./Forecast.scss');
    require('../../../node_modules/owfont/css/owfont-regular.css');

    return (
      <div className="ForecastItem">
        <div className="time">{this.state.time}</div>
        <i className={this.state.classNames}></i>
        <h4 className="temp">{this.props.data.weather[0].main}</h4>
        <small>{this.props.data.weather[0].description}</small>
        <div className="temp">{this.props.data.main.temp}</div>
      </div>
    );
  }
}
