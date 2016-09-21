import React, {Component} from 'react';
import 'whatwg-fetch';
import moment from 'moment';

import Header from '../Header'
import Footer from '../Footer'
import Error from '../Error/Error'
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
      days: []
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
      if(json.list && json.list.length > 0) {
        _this.processListToDays(json)
      } else {
        _this.setState({
          error: true,
          loading: false
        });
      }
    }).catch(function(ex) {
      console.log('parsing failed', ex)
      _this.setState({
        error: true,
        loading: false
      })
    })
  }


  /* TODO: Refactor this, it's terrible.
   * */

  processListToDays(json) {
    const daysObj = {};
    const days = [];
    var dayKey;
    for (let i = 0; i < json.list.length; i++) {
      dayKey = moment.unix(json.list[i].dt).startOf('day').format('dddd, MMMM D YYYY');
      if(typeof daysObj[dayKey] === 'undefined') {
        daysObj[dayKey] = {
          id: dayKey,
          title: dayKey,
          list: []
        }
      }
      daysObj[dayKey].list.push(json.list[i]);
    }

    for (var property in daysObj) {
      if (daysObj.hasOwnProperty(property)) {
        days.push(daysObj[property])
      }
    }

    this.setState({
      city: json.city.name,
      days: days,
      loading: false
    });
  }

  render() {

    return (
      <div className="container">
        <Header city={this.state.city} />
        <Forecast days={this.state.days} isHidden={this.state.loading || this.state.error} />
        <Error isHidden={!this.state.error} />
        <Loading isHidden={!this.state.loading} />
        <Footer />
      </div>
    );
  }
}
