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

class FiftySix extends Component {
  render() {

    const imgFiftySix = require('../../../img/roc-volume-55-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=The%20Ebb%20and%20Flow%20of%20the%20Design%20Process?%20by%20%40fromcortes%20http%3A//blog.cortes.us/ebb-and-flow-of-design-process"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/ebb-and-flow-of-design-process"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/ebb-and-flow-of-design-process" />
        <Content id="56">

          <Image imgSrc={imgFiftySix} imgAlt="The Ebb and Flow of the Design Process" />
          <div className="mb5">
            <H size={1}>The Ebb and Flow of the Design Process</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 56</span>
            <span className="black-50 pr3">Published Oct 6 2017</span>
          </div>

          <P><DropCap>B</DropCap>alance is everything. You know that, I know that. Ups and downs are the way of life and it’s all a balancing act in our personal and professional lives. You might be great at balancing, you might suck at it. Whichever it may be, balance is a constant in life.</P>
          <P>I believe the design process is also a balancing act. Unfortunately, you may be faced with the idea that everything should be about creating. Creating over consuming they say. I think this is wrong and believe there should be equal parts of creating and consuming in our lives. More of one than the other can both lead to less than ideal outcomes.</P>
          <P>Think of your inspiration as a fuel tank. When you’re constantly creating, you use up all your fuel and can literally burn yourself out of creative fuel. Consuming in turn will help refill your tank, but you need to be careful not to overflow your tank or else you feel lazy and unproductive.</P>
          <P>Just remember how important it is to not only create, but take time for yourself to refuel your inspiration and energy. Finding ways to consume that work for you and help you feel inspired is important. No one can tell you the best way to do this and like most things, experimentation and finding how you recharge best is up to you. Only you will know what balance of consuming and creating during your days will be best as a whole.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FiftySix;
