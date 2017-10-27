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

class FiftyNine extends Component {
  render() {

    const imgFiftyNine = require('../../../img/roc-volume-59-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=The%20Ebb%20and%20Flow%20of%20the%20Design%20Process?%20by%20%40fromcortes%20http%3A//blog.cortes.us/how-to-work-after-a-full-time-job"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/how-to-work-after-a-full-time-job"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/how-to-work-after-a-full-time-job" />
        <Content id="59">

          <Image imgSrc={imgFiftyNine} imgAlt="How to Work on Personal Projects after a Long Full-Time Job" />
          <div className="mb5">
            <H size={1}>How to Work on Personal Projects after a Long Full-Time Job</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 59</span>
            <span className="black-50 pr3">Published Oct 27 2017</span>
          </div>

          <P><DropCap>I</DropCap> started a new job about two months ago. A job that requires me to be in work mode for 12 hours a day (I wake up at 5:30am, start work at 7:00am, and get home at 5:30pm). Needless to say — the days are long and tiring even though the work is usually fulfilling. Something I have struggled with since starting this new job is making time to work on side projects. My previous job was from 9:30am–5:00pm and I worked from home with no commute. I wasn’t used to working on the same thing in the same spot for as long as I need to now.</P>
          <P>When I get home, I usually don’t want to do <em>anything</em>. Even watching over my own health and making sure I work out is a frustrating struggle. Let alone working on more design and development work after spending my whole day working on it.</P>
          <P>Lately though, I’ve been using a 15 minute rule. Basically, I make sure I work on one of my projects for at least 15 minutes a night. Some nights I only do the 15 minutes and move on to watching Netflix or playing video games. Some nights I get into the work and am excited enough that I don’t even realize 15 minutes have gone by and end up working for an hour or two.</P>
          <P>Either way, I feel more productive because I have at least put in some work for my personal projects for that day. 15 minutes may not seem like much, but the point is to help keep you feeling productive and motivated on what you are working on.</P>
          <P>I’ll get back to you on making sure I work out every day 😅</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FiftyNine;
