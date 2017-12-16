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

class SixtySix extends Component {
  render() {

    const imgSixtySix = require('../../../img/roc-volume-66-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=A%20Global%20Rule%20for%20Your%20Work%20by%20%40fromcortes%20http%3A//blog.cortes.us/a-global-rule-for-your-work"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/a-global-rule-for-your-work"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/a-global-rule-for-your-work" />
        <Content id="66">

          <Image imgSrc={imgSixtySix} imgAlt="A Global Rule for Your Work" />
          <div className="mb5">
            <H size={1}>A Global Rule for Your Work</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 66</span>
            <span className="black-50 pr3">Published Dec 8 2017</span>
          </div>

          <P><DropCap>R</DropCap>egardless of how many topics I think about around the tech and design industry, a global theme that always comes to mind for me is being a genuinely nice human being. I mean this in every aspect you can think of; how you communicate with others and even how you design or write copy.</P>
          <P>Something as small as being enjoyable to talk to or designing something that makes users smile is a global source of delight that can increase the quality of well… anything.</P>
          <P>Being polite, positive, and kind in an interview can go the extra mile, even if you aren’t 100% prepared for the task at hand. Caring and being supportive of others can keep you top of mind when someone may need your help or expertise. Maintaining a positive attitude and perspective amongst coworkers creates a better environment for those who work with you and gives a better foundation to lead with. Your attitude towards a project is a baseline standard for how you’ll make decisions and can be a resource of truth along the lifetime of a project.</P>
          <P>And let’s be honest, just being nice and polite to others helps you and those around you live happier and healthier lives.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default SixtySix;
