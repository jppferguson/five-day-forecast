import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import ForecastItem from './ForecastItem';

export default class Forecast extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    let forcastClass = classNames({
      'Forecast': true,
      'hidden': this.props.isHidden
    });

    return (
      <div className={forcastClass}>

        {this.props.list.map(function(item) {
           return <ForecastItem key={item.dt_txt} data={item}/>;
        })}

      </div>
    );
  }
}
