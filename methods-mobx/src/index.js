import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'mobx-react'
import counterStore from './store'

ReactDOM.render(
  <Provider counter={counterStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

