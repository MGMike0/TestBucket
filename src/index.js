import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeHandler from './rdx/storeHandler';

import App from './App';

const store = storeHandler.create();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
