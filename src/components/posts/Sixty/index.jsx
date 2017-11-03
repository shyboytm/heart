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

class Sixty extends Component {
  render() {

    const imgSixty = require('../../../img/roc-volume-60-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=The%20Ebb%20and%20Flow%20of%20the%20Design%20Process?%20by%20%40fromcortes%20http%3A//blog.cortes.us/how-to-work-after-a-full-time-job"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/how-to-work-after-a-full-time-job"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/how-to-work-after-a-full-time-job" />
        <Content id="60">

          <Image imgSrc={imgSixty} imgAlt="Removing Choice from the Productivity Equation" />
          <div className="mb5">
            <H size={1}>Removing Choice from the Productivity Equation</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 60</span>
            <span className="black-50 pr3">Published Nov 3 2017</span>
          </div>

          <P><DropCap>W</DropCap>hen you think of the driver in your passions, naturally you think motivation. Excitement for possibilities, trying something new, monetary value, etc. It’s what drives you to take time from our day to work on something. Whether that be a project, business, or self-improvement, being motivated acts as an easy way to fuel energy to pursue them.</P>
          <P>But what about when the motivation isn’t there? The times when you have to choose between immediate and future satisfaction? How do keep yourself focused on that new thing you started a few weeks ago?</P>
          <P>The answer? <strong>Removing the option to choose.</strong></P>
          <P>Removing options doesn’t let you second guess your decisions of what to pursue at any given moment. If you wanted to start a diet, the first thing you would do is remove food in your house that wasn’t part of the diet, right? It’s not any different here.</P>
          <P>Play video games too often? Have a friend or family member hold onto it when you need to focus. Spend too much time on social media? Block the websites with an extension while you’re working. Keep opening distracting apps on your phone? Move them from your home screen or delete them altogether.</P>
          <P>By creating this extra layer of friction on “bad” decisions, you’ll be less inclined to pursue them as a result. Use your laziness to your advantage; make the productive option an easier option to access than the others.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default Sixty;
