import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import Home from './components/Home';

import Twenty from './components/posts/Twenty';
import Eighteen from './components/posts/Eighteen';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/tips-for-working-remote-two" component={Eighteen}/>
      <Route path="/key-growing-social-media-presence" component={Twenty}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
