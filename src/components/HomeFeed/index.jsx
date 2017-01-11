import React, { Component } from 'react';

import HomeFeedItem from '../HomeFeedItem';
import P from '../type-elements/P';
import H from '../type-elements/H';

class HomeFeed extends Component {
  render() {
    return (
      <div id="HomeFeed" className="">
        <H size={3} tt="u">Latest</H>
        <HomeFeedItem />
      </div>
    );
  }
}

export default HomeFeed;
