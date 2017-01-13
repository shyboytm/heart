import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from '../../Header';
import Footer from '../../Footer';

import H from '../../type-elements/H';

class tipsForWorkingRemoteTwo extends Component {
  render() {
    return (
      <div className="db pointer link mb4">
        <Header />
        <div id="HomeFeed" className="bg-white br3 ph4 pv3 shadow-custom">
          <H size={1}>Tips</H>
        </div>
        <Footer />
      </div>
    );
  }
}

export default tipsForWorkingRemoteTwo;
