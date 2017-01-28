import React, { Component } from 'react';

import Header from '../../Header';
import Footer from '../../Footer';

import Blockquote from '../../type-elements/Blockquote';
import DropCap from '../../type-elements/DropCap';
import H from '../../type-elements/H';
import Image from '../../type-elements/Image';
import L from '../../type-elements/L';
import LineBreak from '../../type-elements/LineBreak';
import P from '../../type-elements/P';
import PostEnd from '../../PostEnd';
import Social from '../../type-elements/Social';

class Nineteen extends Component {
  render() {

    const imgNineteen = require('../../../img/roc-volume-19-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2%20via%20%40fromcortes"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2"
          googleLink="https://plus.google.com/share?url=https%3A//www.facebook.com/sharer/sharer.php?u=https%253A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%2523.2iqcydlb2" />
        <div id="19" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgNineteen} imgAlt="How to Come Up with Side Project Ideas" />
          <div className="mb5 tc">
            <H size={1}>How to Come Up with Side Project Ideas</H>
            <span className="blue pr3">Volume 19</span>
            <span className="black-50">Published Jan 19 2017</span>
          </div>

          <P>Welcome to Volume 19 of The Rate of Change. Can’t believe it’s been 20 weeks in a row that I’ve written to you! I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Took a break this week from Quarry stuff since I’m in California!</P>
          <H size={2}>Personal Life</H>
          <P>Been in California this week (Orange County) enjoying the weather here and getting some work done when I can.</P>
          <P>Slowly but surely I have also been working on building my native blog site with a better and more controlled reading experience with my personal taste for simplicity and design elements presenting my writing. I’m building it in React in a way I’ve never worked before, maybe I’ll write a little something about how I’m doing it if there is enough interest.</P>
          <P>I released a new song this week! Definitely my best and most favorite so far. The song samples Me and Your Mama by Childish Gambino and I had a ton of fun making it. Please give it a listen on Soundcloud here:</P>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/302986306&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

          <LineBreak />

          <P>Projects outside of your full-time work is important, no matter what stage of life you are in. As I’ve mentioned in a previous article, side projects help build your skill set, can bring in extra income, and are a creative outlet. But, to create a side project, you first need an idea, right? I’ve made quite a few side projects that have helped and inspired others, all from using certain techniques to come up with their ideas.</P>
          <P>One of the questions I get the most is how I am able to come up with these ideas. Forget actually building them, because without the initial idea there is of course nothing to build. So, I want to give away what I find most helpful when trying to come up with ideas.</P>

          <H size={2}>Tip 1: Observe</H>
          <P>Probably the most important tip I can give you. Keeping an eye out for what you can make life easier is a great way to find project ideas. Observe aspects of your life and the lives of others to find pain points that need relief. For example, I noticed a lot of designers and amateur developers I interact with have a common struggle of finding where they need to go to learn/get better at code. As a result, I am working on building a project that will make these steps a lot easier to tackle.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default Nineteen;
