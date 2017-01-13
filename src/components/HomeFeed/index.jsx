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
        <HomeFeedItem
          postTitle="Less Perfection and More Iteration"
          volumeNumber="12"
          publishedDate="Dec 1 2016" />
        <HomeFeedItem
          postTitle="Advantages of Side Projects"
          volumeNumber="11"
          publishedDate="Nov 24 2016" />
        <HomeFeedItem
          postTitle="Places to Help You Stay Inspired"
          volumeNumber="10"
          publishedDate="Nov 17 2016" />
        <HomeFeedItem
          postTitle="Why Vacations are Important"
          volumeNumber="9"
          publishedDate="Nov 10 2016" />
        <HomeFeedItem
          postTitle="How to Get Better"
          volumeNumber="8"
          publishedDate="Nov 3 2016" />
        <HomeFeedItem
          postTitle="How to Accept and Use Feedback"
          volumeNumber="7"
          publishedDate="Oct 27 2016" />
        <HomeFeedItem
          postTitle="Break Your Comfort Zone"
          volumeNumber="6"
          publishedDate="Oct 20 2016" />
        <HomeFeedItem
          postTitle="Budgeting Your Bandwidth"
          volumeNumber="5"
          publishedDate="Oct 13 2016" />
        <HomeFeedItem
          postTitle="Why You Should Seek Boredom"
          volumeNumber="4"
          publishedDate="Oct 6 2016" />
        <HomeFeedItem
          postTitle="Why You Should Seek Boredom"
          volumeNumber="4"
          publishedDate="Oct 6 2016" />
        <HomeFeedItem
          postTitle="The Advantages of Failing"
          volumeNumber="3"
          publishedDate="Sep 29 2016" />
        <HomeFeedItem
          postTitle="Trends Fade, Technique Does Not"
          volumeNumber="2"
          publishedDate="Sep 22 2016" />
        <HomeFeedItem
          postTitle="Introducing: The Rate of Change Blog"
          volumeNumber="1"
          publishedDate="Sep 15 2016" />
      </div>
    );
  }
}

export default HomeFeed;
