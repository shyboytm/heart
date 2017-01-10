import React, { Component } from 'react';

import HomeFeedItem from '../HomeFeedItem';
import P from '../type-elements/P';

class HomeFeed extends Component {
  render() {
    return (
      <div id="HomeFeed" className="">
        <h3>HomeFeed</h3>
        <HomeFeedItem />
        <P />
      </div>
    );
  }
}

export default HomeFeed;
