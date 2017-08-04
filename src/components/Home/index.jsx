import React, { Component } from 'react';

import Content from '../Content'
import Header from '../Header';
import HomeFeed from '../HomeFeed';
import Footer from '../Footer';

import H from '../type-elements/H';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <Header />
        <Content>
          <HomeFeed />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default Home;
