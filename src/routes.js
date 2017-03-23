import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Show from './Show';
import NotFound from './Notfound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
        <Route path="/show" component={Show} />
        <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;