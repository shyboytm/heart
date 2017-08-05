import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="flex flex-row-l flex-column items-center justify-between w-100 pa4 bb b--black-05 lh-copy">
        <div className="flex">
          <Link to="/" className="link black hover-black-30">
            <h1 className="f4 lh-title ttu fw9 tracked mv0-l mb3">The Rate of Change</h1>
          </Link>
        </div>
        <div className="flex items-center db">
          <a href="/" className="f6 link black hover-blue mr4">by Dennis Cortés</a>
          <a href="/" className="f6 link bg-animate hover-bg-light-red br2 ph2 pv1 dib white bg-red">Subscribe</a>
        </div>
      </div>
    );
  }
}

export default Header;
