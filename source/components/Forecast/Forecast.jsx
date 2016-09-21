import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ForecastItem from './ForecastItem';

export default class Forecast extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>

        {this.props.list.map(function(item) {
           return <ForecastItem key={item.dt_txt} data={item}/>;
        })}

      </div>
    );
  }
}
