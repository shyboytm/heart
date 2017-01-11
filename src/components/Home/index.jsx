import React, { Component } from 'react';

import Header from '../Header';
import HomeFeed from '../HomeFeed';
import Footer from '../Footer';

class Home extends Component {
  render() {
    return (
      <div id="Home" className="">
        <Header />
        <div id="HomeFeed" className="bg-white br3 ph4 pv3 shadow-custom">
          <HomeFeed />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
