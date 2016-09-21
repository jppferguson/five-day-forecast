import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class Loading extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let loadingClass = classNames({
      'Loading': true,
      'hidden': this.props.isHidden
    });

    return (
      <div className={loadingClass}>
        Loading...
      </div>
    );
  }
}
