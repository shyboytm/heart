import React, { Component } from 'react';

import HomeFeedItem from '../HomeFeedItem';
import H from '../type-elements/H';

class HomeFeed extends Component {
  render() {
    return (
      <div id="HomeFeed" className="">
        <H size={4} tt="u">Latest</H>
        <HomeFeedItem
          postTitle="How Sacrifices Provide Productivity"
          volumeNumber="23"
          publishedDate="Feb 16 2017"
          postLink="/how-sacrifices-provide-productivity" />
        <HomeFeedItem
          postTitle="Guidelines to Great Logo Design"
          volumeNumber="22"
          publishedDate="Feb 9 2017"
          postLink="/guidelines-great-logo-design" />
        <HomeFeedItem
          postTitle="Find Your Own Productivity Secret"
          volumeNumber="21"
          publishedDate="Feb 2 2017"
          postLink="/find-your-productivity-secret" />
        <HomeFeedItem
          postTitle="The Key to Growing Your Social Media Presence"
          volumeNumber="20"
          publishedDate="Jan 26 2017"
          postLink="/key-growing-social-media-presence" />
        <HomeFeedItem
          postTitle="How to Come Up with Side Project Ideas"
          volumeNumber="19"
          publishedDate="Jan 19 2017"
          postLink="/how-come-up-side-project-ideas" />
        <HomeFeedItem
          postTitle="Tips for Working Remote (Part 2)"
          volumeNumber="18"
          publishedDate="Jan 19 2017"
          postLink="/tips-for-working-remote-two" />
        <HomeFeedItem
          postTitle="Tips for Working Remote (Part 1)"
          volumeNumber="17"
          publishedDate="Jan 5 2017"
          postLink="/tips-for-working-remote-one" />
        <HomeFeedItem
          postTitle="My 2016"
          volumeNumber="16"
          publishedDate="Dec 29 2016"
          postLink="/2016" />
        <HomeFeedItem
          postTitle="Distractions Provide Progress"
          volumeNumber="15"
          publishedDate="Dec 22 2016"
          postLink="/distractions-provide-progress" />
        <HomeFeedItem
          postTitle="How to Cure Creative Block"
          volumeNumber="14"
          publishedDate="Dec 15 2016"
          postLink="/how-cure-creative-block" />
        <HomeFeedItem
          postTitle="People are More than Connections"
          volumeNumber="13"
          publishedDate="Dec 8 2016"
          postLink="/people-more-than-connections" />
        <HomeFeedItem
          postTitle="Less Perfection and More Iteration"
          volumeNumber="12"
          publishedDate="Dec 1 2016"
          postLink="/more-iteration-less-perfection" />
        <HomeFeedItem
          postTitle="Advantages of Side Projects"
          volumeNumber="11"
          publishedDate="Nov 24 2016"
          postLink="/advantages-of-side-projects" />
        <HomeFeedItem
          postTitle="Places to Help You Stay Inspired"
          volumeNumber="10"
          publishedDate="Nov 17 2016"
          postLink="/places-help-you-stay-inspired" />
        <HomeFeedItem
          postTitle="Why Vacations are Important"
          volumeNumber="9"
          publishedDate="Nov 10 2016"
          postLink="/why-vacations-are-important" />
        <HomeFeedItem
          postTitle="How to Get Better"
          volumeNumber="8"
          publishedDate="Nov 3 2016"
          postLink="/how-to-get-better" />
        <HomeFeedItem
          postTitle="How to Accept and Use Feedback"
          volumeNumber="7"
          publishedDate="Oct 27 2016"
          postLink="/accept-and-use-feedback" />
        <HomeFeedItem
          postTitle="Break Your Comfort Zone"
          volumeNumber="6"
          publishedDate="Oct 20 2016"
          postLink="/break-your-comfort-zone" />
        <HomeFeedItem
          postTitle="Budgeting Your Bandwidth"
          volumeNumber="5"
          publishedDate="Oct 13 2016"
          postLink="/budgeting-your-bandwidth" />
        <HomeFeedItem
          postTitle="Why You Should Seek Boredom"
          volumeNumber="4"
          publishedDate="Oct 6 2016"
          postLink="/why-to-seek-boredom" />
        <HomeFeedItem
          postTitle="The Advantages of Failing"
          volumeNumber="3"
          publishedDate="Sep 29 2016"
          postLink="/the-advantages-of-failing" />
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
