import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './Forecast.scss';

import ForecastItem from './ForecastItem';

export default class ForecastDay extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <div className="ForecastDay">

        <div className="title">
          <h3>{this.props.title}</h3>
        </div>

        {this.props.dayItems.map(function(item) {
           return <ForecastItem key={item.dt_txt} data={item}/>;
        })}

      </div>
    );
  }
}
