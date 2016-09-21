import React, {Component} from 'react';
import 'whatwg-fetch';

import Header from '../Header'
import Footer from '../Footer'
import Forecast from '../Forecast/Forecast'

import config from '../../config';

export default class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      list: []
    }
  }

  componentDidMount() {

    /* TODO: This request should really be made in Flux or Redux, but in the
     *       absence of either, lets keep the state in the Root component.
     * */

    var _this = this;
    this.serverRequest = fetch(config.api.endpoint).then(function(response) {
      return response.json()
    }).then(function(json) {
      _this.setState({
        list: json.list
      });
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  render() {

    return (
      <div className="container">
        <Header />
        <Forecast list={this.state.list} />
        <Footer />
      </div>
    );
  }
}
