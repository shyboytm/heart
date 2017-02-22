import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="tc mb5 ph3">
        <Link to="/" className="link">
          <h1 className="ttu tracked f2 fw9 lh-title troc-title">The Rate of Change</h1>
        </Link>
        <h2 className="black-60 fw4 f4 lh-copy">A blog about Design, Development, Business, and Life</h2>
        <div className="cf mt4">
          <a href="http://cortes.us" className="link i blue hover-light-blue ph3">by Dennis Cortés</a>
          <a href="http://cortes.us" className="link blue hover-light-blue ph3 b">Subscribe</a>
        </div>
      </div>
    );
  }
}

export default Header;
