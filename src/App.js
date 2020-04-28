import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Setup from './containers/Setup';

const App = () => (
  <>
    <BrowserRouter>
      <Route exact path="/" component={Setup} />
    </BrowserRouter>
  </>
);

export default App;
