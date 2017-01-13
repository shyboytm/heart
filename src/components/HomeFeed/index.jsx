import React, { Component } from 'react';

import HomeFeedItem from '../HomeFeedItem';
import H from '../type-elements/H';

class HomeFeed extends Component {
  render() {
    return (
      <div id="HomeFeed" className="">
        <H size={4} tt="u">Latest</H>
        <HomeFeedItem
          postTitle="Tips for Working Remote (Part 2)"
          volumeNumber="18"
          publishedDate="Jan 12 2017" />
        <HomeFeedItem
          postTitle="Tips for Working Remote (Part 1)"
          volumeNumber="17"
          publishedDate="Jan 5 2017" />
        <HomeFeedItem
          postTitle="My 2016"
          volumeNumber="16"
          publishedDate="Dec 29 2016" />
        <HomeFeedItem
          postTitle="Distractions Provide Progress"
          volumeNumber="15"
          publishedDate="Dec 22 2016" />
        <HomeFeedItem
          postTitle="How to Cure Creative Block"
          volumeNumber="14"
          publishedDate="Dec 15 2016" />
        <HomeFeedItem
          postTitle="People are More than Connections"
          volumeNumber="13"
          publishedDate="Dec 8 2016" />
      </div>
    );
  }
}

export default HomeFeed;
