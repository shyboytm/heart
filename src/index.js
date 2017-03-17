import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { render } from 'react-snapshot';

import './index.css';

import App from './App';
import Home from './components/Home';

import One from './components/posts/One';


render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/the-rate-of-change" component={One}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
