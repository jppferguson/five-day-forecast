import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App'

require('file?name=[name].[ext]!./public/index.html');


ReactDOM.render(
  <App />,
  document.getElementById('container')
);
