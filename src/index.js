import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { render } from 'react-snapshot';

import './index.css';

import App from './App';
import Home from './components/Home';

import One from './components/posts/One';
import Two from './components/posts/Two';
import Three from './components/posts/Three';
import Four from './components/posts/Four';
import Five from './components/posts/Five';
import Six from './components/posts/Six';
import Seven from './components/posts/Seven';
import Eight from './components/posts/Eight';
import Nine from './components/posts/Nine';
import Ten from './components/posts/Ten';
import Eleven from './components/posts/Eleven';
import Twelve from './components/posts/Twelve';
import Thirteen from './components/posts/Thirteen';
import Fourteen from './components/posts/Fourteen';
import Fifteen from './components/posts/Fifteen';
import Sixteen from './components/posts/Sixteen';
import Seventeen from './components/posts/Seventeen';
import Eighteen from './components/posts/Eighteen';
import Nineteen from './components/posts/Nineteen';
import Twenty from './components/posts/Twenty';
import TwentyOne from './components/posts/TwentyOne';
import TwentyTwo from './components/posts/TwentyTwo';
import TwentyThree from './components/posts/TwentyThree';
import TwentyFour from './components/posts/TwentyFour';
import TwentyFive from './components/posts/TwentyFive';
import TwentySix from './components/posts/TwentySix';
import TwentySeven from './components/posts/TwentySeven';
import TwentyEight from './components/posts/TwentyEight';
import TwentyNine from './components/posts/TwentyNine';

render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/the-rate-of-change" component={One}/>
      <Route path="/trends-fade-techniques-dont" component={Two}/>
      <Route path="/the-advantages-of-failing" component={Three}/>
      <Route path="/why-to-seek-boredom" component={Four}/>
      <Route path="/budgeting-your-bandwidth" component={Five}/>
      <Route path="/break-your-comfort-zone" component={Six}/>
      <Route path="/accept-and-use-feedback" component={Seven}/>
      <Route path="/how-to-get-better" component={Eight}/>
      <Route path="/why-vacations-are-important" component={Nine}/>
      <Route path="/places-help-you-stay-inspired" component={Ten}/>
      <Route path="/advantages-of-side-projects" component={Eleven}/>
      <Route path="/more-iteration-less-perfection" component={Twelve}/>
      <Route path="/people-more-than-connections" component={Thirteen}/>
      <Route path="/how-cure-creative-block" component={Fourteen}/>
      <Route path="/distractions-provide-progress" component={Fifteen}/>
      <Route path="/2016" component={Sixteen}/>
      <Route path="/tips-for-working-remote-one" component={Seventeen}/>
      <Route path="/tips-for-working-remote-two" component={Eighteen}/>
      <Route path="/how-come-up-side-project-ideas" component={Nineteen}/>
      <Route path="/key-growing-social-media-presence" component={Twenty}/>
      <Route path="/find-your-productivity-secret" component={TwentyOne}/>
      <Route path="/guidelines-great-logo-design" component={TwentyTwo}/>
      <Route path="/how-sacrifices-provide-productivity" component={TwentyThree}/>
      <Route path="/give-away-what-you-know" component={TwentyFour}/>
      <Route path="/finding-comfort-identity-crisis" component={TwentyFive}/>
      <Route path="/keep-learning-stay-fullfilled" component={TwentySix}/>
      <Route path="/guide-healthy-work-from-home-lifestyle" component={TwentySeven}/>
      <Route path="/set-up-your-success-early" component={TwentyEight}/>
      <Route path="/apple-lg-ultrafine-review" component={TwentyNine}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
