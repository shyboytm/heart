import React, { Component } from 'react';

import Header from '../Header';
import HomeFeed from '../HomeFeed';
import Footer from '../Footer';

class Home extends Component {
  render() {
    return (
      <div id="Home" className="bg-black-05">
        <Header />
        <h1>Home</h1>
        <HomeFeed />
        <Footer />
      </div>
    );
  }
}

export default Home;
