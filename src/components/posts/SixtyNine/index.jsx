import React, { Component } from 'react';

import Content from '../../Content';
import Header from '../../Header';
import Footer from '../../Footer';

import DropCap from '../../type-elements/DropCap';
import GalleryThree from '../../post-elements/GalleryThree';
import H from '../../type-elements/H';
import Image from '../../type-elements/Image';
import L from '../../type-elements/L';
import LineBreak from '../../type-elements/LineBreak';
import P from '../../type-elements/P';
import PostEnd from '../../post-elements/PostEnd';
import Social from '../../type-elements/Social';

class SixtyNine extends Component {
  render() {

    const imgSixtyNine = require('../../../img/roc-volume-69-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Here%20is%20My%20Illustration%20Process%20by%20%40fromcortes%20http%3A//blog.cortes.us/here-is-my-illustration-process"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/here-is-my-illustration-process"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/here-is-my-illustration-process" />
        <Content id="69">

          <Image imgSrc={imgSixtyNine} imgAlt="Here’s My Illustration Process" />
          <div className="mb5">
            <H size={1}>Here’s My Illustration Process</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 69</span>
            <span className="black-50 pr3">Published Jan 12 2017</span>
          </div>

          <P><DropCap>B</DropCap>ecause of the great feedback I got on my <L hrefLink="https://blog.cortes.us/peek-into-my-illustration-process">last post</L> sharing my illustration process, I thought I’d bring another one for you this week. Skillshare reached out to me again to work with <L hrefLink="https://www.instagram.com/illustree/">Illustree</L> on a campaign they are promoting this month of January. Illustree is a side project of mine that I started a few years ago and have worked with a few brands on similar campaigns. Always open to others if you need some promotion help!</P>
          <P>Anyways, below is a video timelapse showing my process from start to finish from sketching, to roughing in shapes in Illustrator, and finally adding details and color at the end. Similar videos from other creators have been helpful and I really enjoy creating these, especially with all the positive feedback I’ve gotten on them. Let me know if these are helpful and/or if you want to see more of them.</P>
          <P>I’ll be back with a full article going over my mobile photography process from start to finish. See you then, enjoy!</P>
          <P>Oh, and here’s 3 months of Skillshare for only $0.99: <L hrefLink="http://skl.sh/illustree2">http://skl.sh/illustree2</L></P>

          <iframe className="bn shadow-custom br2" width="100%" height="350" src="https://www.youtube.com/embed/fHEehtmv9oU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default SixtyNine;
