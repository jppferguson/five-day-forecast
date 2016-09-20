import React, {Component} from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0
    };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const styles = require('./App.scss');

    return (
      <div className="countdown">Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}
