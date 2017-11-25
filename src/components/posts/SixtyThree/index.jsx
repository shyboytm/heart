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

class SixtyThree extends Component {
  render() {

    const imgSixtyThree = require('../../../img/roc-volume-63-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Making%20the%20Most%20of%20Your%20Time%20Off%20by%20%40fromcortes%20http%3A//blog.cortes.us/making-the-most-of-your-time-off"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/making-the-most-of-your-time-off"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/making-the-most-of-your-time-off" />
        <Content id="63">

          <Image imgSrc={imgSixtyThree} imgAlt="Making the Most of Your Time Off" />
          <div className="mb5">
            <H size={1}>Making the Most of Your Time Off</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 63</span>
            <span className="black-50 pr3">Published Nov 24 2017</span>
          </div>

          <P><DropCap>Y</DropCap>ou may be thinking this is going to be another article with me talking to you about grinding during your time off and getting work done. Spoiler! It’s not.</P>
          <P>Originally I thought about writing about using your time off to work on things you can’t normally work on. But, I just spent the past week doing absolutely nothing in the work realm. I spent time with my family, worked on music, played a bunch of video games, and completely ignored any work I could have done.</P>
          <P>Sure, I could have spent time getting ahead on some of my side projects or writing new articles. But I hadn’t taken a true vacation in about a year. Between switching jobs, moving across states, and working on new side projects, I was in desperate need of a break. So that’s what I did this trip; completely separated myself from any work and did things I wanted to do. I got almost 3 new tracks ready this week for my first EP, something I’ve always wanted to do and want to continue to work on.</P>
          <P>So why am I telling you all of this? Well, I want to give you a little reminder of something you probably already know.</P>
          <P><strong>Use the most of your time off.</strong></P>
          <P>Have you been working your butt off and need a break? Take a break, you deserve it! Is this the perfect opportunity to work on something you’ve been wanting to do? Do it then! Want to take the time to learn something new? Now’s your chance!</P>
          <P>Whatever it is, gauge your time for what is most beneficial for your life right now. Whether you’re motivated to work on something, or feel like doing absolutely nothing, being conscious and self-disciplined to act on this is crucial to balance in your life. It is <em>your</em> time after all, use it however best fits your current situation.</P>


          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default SixtyThree;
