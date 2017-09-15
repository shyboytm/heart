import React, { Component } from 'react';

import Content from '../../Content';
import Header from '../../Header';
import Footer from '../../Footer';

import DropCap from '../../type-elements/DropCap';
import H from '../../type-elements/H';
import Image from '../../type-elements/Image';
import L from '../../type-elements/L';
import LineBreak from '../../type-elements/LineBreak';
import P from '../../type-elements/P';
import PostEnd from '../../post-elements/PostEnd';
import Social from '../../type-elements/Social';

class FiftyThree extends Component {
  render() {

    const imgFiftyThree = require('../../../img/roc-volume-53-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=The%20Real%20Reason%20I%20Love%20Apple%20Events%20by%20%40fromcortes%20http%3A//blog.cortes.us/real-reason-i-love-apple-events"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/real-reason-i-love-apple-events"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/real-reason-i-love-apple-events" />
        <Content id="53">

          <Image imgSrc={imgFiftyThree} imgAlt="The Real Reason I Love Apple Events" />
          <div className="mb5">
            <H size={1}>The Real Reason I Love Apple Events</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 53</span>
            <span className="black-50 pr3">Published Sep 15 2017</span>
          </div>

          <P><DropCap>A</DropCap>pple’s latest event was this past Tuesday, September 13th. I’ve been an Apple fan boy since high school when I got my first laptop, and my obsession grew even more when I got into the world of design. Even being an Apple fanboy, I must admit each event comes with its own magnificent work as well as glaring issues. I’m sure this is due to internal constraints, deadlines, and feature planning.</P>
          <P>This post isn’t meant to be a critique of Apple by any means, but I can’t help giving a small bit of my thoughts on the iPhone X announcement. The other announcements made were a bit lack luster for my personal taste.</P>

          <H size={2}>iPhone X</H>
          <P>Overall, it’s gorgeous. An edge-to-edge display, glass back, aluminum mid-section, and iOS 11 all makes for a killer overall phone for iPhone’s 10th anniversary. Not to mention the improved camera, OLED display, and accompanying exclusive features for the iPhone X.</P>
          <P>The one gripe I think most people have is the notch at the top. I’m usually the optimist in situations similar to this, but I really can’t seem to find much praise to say here. Sure, you could say it makes it unique over other smartphones, but there has to be another reason for this was the approved design. I wish they would have gone with a bar full width instead of just a notch in the middle.</P>
          <P>To be clear, it’s not because “it’s ugly”, it really isn’t that bad. It’s because of how much it affects the experience of the user with the phone that contradict. For one, Apple used to make a huge deal in their guidelines about not removing information from the status bar for users and yet this design inherently does just that. Using the phone in landscape also presents many UX struggles to overcome when browsing the web or scrolling through lists and feeds. I’ll hold this judgement based on when we actually see it live in the world but from the regulations in Apple’s guidelines, I’m not sure we’ll see too much change at launch.</P>

          <H size={2}>The Real Reason</H>
          <P>As much as I love watching the announcement keynotes that Apple gives, my true excitement comes after the keynote is over. I sit at my desk feverishly refreshing the Apple website to see all the new marketing pages flood in at once.</P>
          <P>As a web designer and developer, seeing the new ways that Apple uses imagery, typography, and animations with each iteration feels like a candy store to me. I feel obsessed and excited to learn about the execution and tactics behind Apple’s work while finding new ways to be inspired in my own work.</P>
          <P>I invite you to browse new pages like the <L hrefLink="https://www.apple.com/iphone-x">iPhone X</L>, <L hrefLink="https://www.apple.com/apple-watch-series-3">Watch Series 3</L>, and <L hrefLink="https://www.apple.com/apple-tv-4k">Apple TV</L> while they’re new and fresh.</P>


          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FiftyThree;
