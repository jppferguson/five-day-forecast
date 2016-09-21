import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './Error.scss';

export default class Error extends Component {

  render() {
    let ErrorClass = classNames({
      'Error': true,
      'hidden': this.props.isHidden
    });

    return (
      <div className={ErrorClass}>
        Oops! There was an error loading the data.
      </div>
    );
  }
}
