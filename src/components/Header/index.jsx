import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="flex flex-row-l flex-column items-center justify-between w-100 pa4 bb b--black-05 lh-copy">
        <div className="flex">
          <Link to="/" className="link black hover-black-30">
            <h1 className="f4 lh-title b mv0-l mb3 avenir">The Rate<br /><em className="georgia ml4 pl2 fw4 black-30">of</em> Change</h1>
          </Link>
        </div>
        <div className="flex items-center db">
          <a target="_blank" href="https://cortes.us" className="f6 link black hover-blue mr4">by Dennis Cortés</a>
          <a target="_blank" href="http://eepurl.com/cgT2bD" className="f6 link bg-animate hover-bg-light-red br2 ph2 pv1 dib white bg-red">Subscribe</a>
        </div>
      </div>
    );
  }
}

export default Header;
