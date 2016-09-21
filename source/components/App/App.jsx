import React, {Component} from 'react';
import 'whatwg-fetch';

import Header from '../Header'
import Footer from '../Footer'
import Loading from '../Loading/Loading'
import Forecast from '../Forecast/Forecast'

import config from '../../config';

export default class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      error: false,
      city: null,
      loading: true,
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
        city: json.city.name,
        list: json.list,
        loading: false
      });
    }).catch(function(ex) {
      console.log('parsing failed', ex)
      _this.setState({
        error: true,
        loading: false
      })
    })
  }

  render() {

    return (
      <div className="container">
        <Header city={this.state.city} />
        <Forecast list={this.state.list} isHidden={this.state.loading || this.state.error} />
        <Loading list={this.state.list} isHidden={!this.state.loading} />
        <Footer />
      </div>
    );
  }
}
