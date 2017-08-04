import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="flex-ns items-center justify-between w-100 pa4 tl-ns tc bb b--black-05 lh-copy">
        <div className="flex-ns db">
          <h1 className="troc-title dib f4 lh-title ttu fw9 tracked mv0-ns mb3">The Rate of Change</h1>
        </div>
        <div className="flex-ns db">
          <a href="/" className="link black-60 mr3">by Dennis Cortés</a>
          <a href="/" className="link blue">Subscribe</a>
        </div>
      </div>
    );
  }
}

export default Header;
