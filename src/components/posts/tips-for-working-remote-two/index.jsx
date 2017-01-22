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
import Social from '../../type-elements/Social';

class Eighteen extends Component {
  render() {

    const imgTipsForWorkingRemoteTwo = require('../../../img/roc-volume-18-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Tips%20for%20Working%20Remote%20Part%202%20http%3A//blog.cortes.us/tips-for-working-remote-two%20via%20%40fromcortes"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/tips-for-working-remote-two"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/tips-for-working-remote-two" />
        <div id="18" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">
          <Image imgSrc={imgTipsForWorkingRemoteTwo} imgAlt="Tips for Working Remote 2" />
          <div className="mb5 tc">
            <H size={1}>Tips for Working Remote Part 2</H>
            <span className="blue pr3">Volume 18</span>
            <span className="black-50">Published Jan 12 2017</span>
          </div>
          <P>Welcome to Volume 18 of The Rate of Change. I hope you’re having an amazing week! As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={3}>Side Projects at Quarry - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Eighteen;
