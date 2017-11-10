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

class SixtyOne extends Component {
  render() {

    const imgSixtyOne = require('../../../img/roc-volume-61-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=A%20Peek%20Into%20my%20of%20Illustration%20Process?%20by%20%40fromcortes%20http%3A//blog.cortes.us/how-to-work-after-a-full-time-job"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/how-to-work-after-a-full-time-job"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/how-to-work-after-a-full-time-job" />
        <Content id="61">

          <Image imgSrc={imgSixtyOne} imgAlt="A Peek into my Illustration Process" />
          <div className="mb5">
            <H size={1}>A Peek into my Illustration Process</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 61</span>
            <span className="black-50 pr3">Published Nov 10 2017</span>
          </div>

          <P><DropCap>To</DropCap> be totally transparent, I didn’t have an article written for this week. Some other work took priority at the times I usually write this, including what I’m going to share with you instead. Below is a peek into the illustration process on a small project I worked on with Skillshare.</P>
          <P>More details are given in the video and the video gives a high-level overview of how some of my illustration work was done. Keep in mind this was a very small and open-ended project, my typical process has a bit more steps and overall more time put into them. Regardless, I thought this would be a nice thing to share for this week’s article instead of the usual post.</P>
          <P>Let me know if you enjoy and/or want more looks into my process, whether for brand, illustration, product, code, etc.</P>

          <iframe className="bn shadow-custom br2" width="100%" height="350" src="https://www.youtube.com/embed/1PiIiG4Hh-A" frameborder="0" allowfullscreen></iframe>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default SixtyOne;
