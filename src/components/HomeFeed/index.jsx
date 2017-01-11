import React, { Component } from 'react';

import HomeFeedItem from '../HomeFeedItem';
import P from '../type-elements/P';
import H from '../type-elements/H';

class HomeFeed extends Component {
  render() {
    return (
      <div id="HomeFeed" className="">
        <h3>HomeFeed</h3>
        <HomeFeedItem />
        <H size={2}>This is a Header test</H>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</P>
      </div>
    );
  }
}

export default HomeFeed;
