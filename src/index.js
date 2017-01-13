import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import Home from './components/Home';

import tipsForWorkingRemoteTwo from './components/posts/tips-for-working-remote-two';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/tips-for-working-remote-two" component={tipsForWorkingRemoteTwo}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
