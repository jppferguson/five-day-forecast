import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import moment from 'moment';
import './Forecast.scss';

import ForecastDay from './ForecastDay';

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

        {this.props.days.map(function(item) {
           return <ForecastDay key={item.id} dayItems={item.list} title={item.title} />;
        })}

      </div>
    );
  }
}
