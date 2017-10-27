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

class FiftyEight extends Component {
  render() {

    const imgFiftyEight = require('../../../img/roc-volume-58-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=The%20Ebb%20and%20Flow%20of%20the%20Design%20Process?%20by%20%40fromcortes%20http%3A//blog.cortes.us/ebb-and-flow-of-design-process"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/ebb-and-flow-of-design-process"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/ebb-and-flow-of-design-process" />
        <Content id="58">

          <Image imgSrc={imgFiftyEight} imgAlt="The Mistake I Make that Kills My Productivity" />
          <div className="mb5">
            <H size={1}>The Mistake I Make that Kills My Productivity</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 58</span>
            <span className="black-50 pr3">Published Oct 20 2017</span>
          </div>

          <P><DropCap>P</DropCap>roductivity seems to always be at the center of the work place. Optimizing workflows and streamlining the way people work has always been and will be a place for ideas and companies to thrive.</P>
          <P>But what if it’s not the tool that is the inhibitor?</P>
          <P>As a very self-analytical person, I think about this a lot. I think about how my routine and approach to work is what is subdues my output instead of the tools I use. Tools are definitely important to me and I love testing new approaches, but ultimately it comes down to me to make myself get the work done.</P>
          <P>Having started a new job with a vastly different routine, I’ve had this on my mind heavily lately. I feel ambitious and passionate about the ideas and projects I have outside of my full-time job, so why do I feel overwhelmed and stagnant with the work I put into them? Once I was able to step back and analyze what I do from a different perspective it was obvious.</P>
          <P>I lacked focus. Not focus so much as when I sit down to get something done but more long term focus and organization. I’ve always been the one to want to pump out project after project, seemingly more busy that I actually am. While this works for smaller scale projects, now that I want to create and take on more ambitious projects I found myself feeling defeated and overwhelmed. While this feeling still lurks around me sometimes, I’m being more conscious of where I want to focus and what I want to do at a larger and long-term scale.</P>
          <P>Some things I’ve discovered are quite surprising at first, but  having dug deep down to the foundations of where my passion lies I feel more confident in my decisions now. As deep as it sounds, thinking about what I truly want to do with my life and where I want my passions to play a part in my life is incredibly empowering. I have more focus and purpose in the work I want to do and am slowly putting this into action on my own time (I’ll be relaying updates on <L hrefLink="https://twitter.com/fromcortes">Twitter</L> if you’re interested).</P>

          <H size={2}>So, what does this mean for you?</H>
          <P>My advice is to do what I did; take a step back and think over where your focus is in life currently and what you want to be doing in the future. Find two, maybe three areas to focus on in your work (personal and full-time) that  will get you on the best path to get there. I think it’s important to do this every couple of weeks to keep yourself in check and figure out what parts of your life are the most important.</P>
          <P>Changing your mind is fine. We’re all learning new things about ourselves and others every day. If you need to shift focus, even abandon an idea or project to focus on something more important, so be it. You being happy, focused, and motivated should be at the forefront of your decisions.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FiftyEight;
