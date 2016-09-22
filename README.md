# Five Day Forecast

[The (Edinburgh) forecast.](https://fivedayforecast.herokuapp.com/) For five days.

[![dependency Status](https://img.shields.io/david/jppferguson/five-day-forecast.svg?style=flat)](https://david-dm.org/jppferguson/five-day-forecast#info=devDependencies) [![devDependency Status](https://img.shields.io/david/dev/jppferguson/five-day-forecast.svg?style=flat)](https://david-dm.org/jppferguson/five-day-forecast#info=devDependencies)


## Setup
```
npm install
```

## Build Tasks
**Run tests:** `npm test`
**Run development build:** `npm run build`
**Run development server:** `npm run dev`
**Run production build:** `npm run build --production`
**Start app (relies on either of the build tasks):** `npm start`

## A note on Heroku
To build the app scripts on heroku, you can disable the production flag, so devDependancies are installed and the build can be created, like so:
`heroku config:set NPM_CONFIG_PRODUCTION=false`

## What could be done with more time:

- Use flux / redux, especially for ajax calls
- Make universal / isomorphic
- Get alternate locations by city search and/or geolocation
- Much better test coverage
- Better UI
- Don't expose API key
- Cache data
- Favicon
