import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import Home from './components/Home';

import Sixteen from './components/posts/Sixteen';
import Seventeen from './components/posts/Seventeen';
import Eighteen from './components/posts/Eighteen';
import Nineteen from './components/posts/Nineteen';
import Twenty from './components/posts/Twenty';
import TwentyOne from './components/posts/TwentyOne';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/2016" component={Sixteen}/>
      <Route path="/tips-for-working-remote-one" component={Seventeen}/>
      <Route path="/tips-for-working-remote-two" component={Eighteen}/>
      <Route path="/how-come-up-side-project-ideas" component={Nineteen}/>
      <Route path="/key-growing-social-media-presence" component={Twenty}/>
      <Route path="/find-your-productivity-secret" component={TwentyOne}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
