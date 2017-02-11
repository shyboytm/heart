import React, { Component } from 'react';

import Header from '../../Header';
import Footer from '../../Footer';

import Blockquote from '../../type-elements/Blockquote';
import DropCap from '../../type-elements/DropCap';
import GalleryThree from '../../post-elements/GalleryThree';
import H from '../../type-elements/H';
import Image from '../../type-elements/Image';
import L from '../../type-elements/L';
import LineBreak from '../../type-elements/LineBreak';
import P from '../../type-elements/P';
import PostEnd from '../../post-elements/PostEnd';
import Social from '../../type-elements/Social';

class Sixteen extends Component {
  render() {

    const imgFourteen = require('../../../img/roc-volume-14-cover.png');
    const imgTNOne    = require('../../../img/postImgs/taste-notes-one.png');
    const imgTNTwo    = require('../../../img/postImgs/taste-notes-two.png');
    const imgTNThree  = require('../../../img/postImgs/taste-notes-three.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2%20via%20%40fromcortes"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2"
          googleLink="https://plus.google.com/share?url=https%3A//www.facebook.com/sharer/sharer.php?u=https%253A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%2523.2iqcydlb2" />
        <div id="14" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgFourteen} imgAlt="Distractions Provide Progress" />
          <div className="mb5 tc">
            <H size={1}>How to Cure Creative Block</H>
            <span className="blue pr3">Volume 14</span>
            <span className="black-50">Published Dec 15 2016</span>
          </div>

          <P>Welcome to Volume 14 of The Rate of Change, hope your having a great week. This week’s post is a little different but as I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>This is not necessarily under the Quarry brand, but still under side projects. I launched Taste Notes officially this week! It’s been done for a few weeks now, but I’ve been adding and refining a few things. It’s a side project based around coffee roasts, shops, gear, and culture! You can <L hrefLink="http://coffee.cortes.us/">check out the site here</L> and check out the new <L hrefLink="https://medium.com/taste-notes">Taste Notes blog here</L>. Let me know what you think!</P>
          <GalleryThree
            imgOne={imgTNOne}
            imgTwo={imgTNTwo}
            imgThree={imgTNThree} />
          <H size={2}>Personal Life</H>

          <LineBreak />

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default Sixteen;
