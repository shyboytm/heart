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

class FiftyFour extends Component {
  render() {

    const imgFiftyFour = require('../../../img/roc-volume-54-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Additional%20Before%20Necessary%20Patterns%20in%20Tech%20Products%20by%20%40fromcortes%20http%3A//blog.cortes.us/additional-before-necessary-patterns"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/additional-before-necessary-patterns"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/additional-before-necessary-patterns" />
        <Content id="54">

          <Image imgSrc={imgFiftyFour} imgAlt="Additional Before Necessary Patterns in Tech Products" />
          <div className="mb5">
            <H size={1}>Additional Before Necessary Patterns in Tech Products</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 54</span>
            <span className="black-50 pr3">Published Sep 22 2017</span>
          </div>

          <P><DropCap>O</DropCap>ne of my biggest passions in my work is learning about systems and processes in the ways that individuals and teams work. I love finding where others struggle and figuring out solutions to help the process and/or individual improve. I’ve worked on teams, led my own teams, and worked on my own in various instances for the past 5+ years.</P>
          <P>A pattern I have noticed time and time again is the obsession with additional before necessary in design and/or development.</P>
          <P>Obsession with the extra bells and whistles before even getting the experience correct. From the outside it makes complete sense, right? But think about your process. How many times are you figuring out the foundations for your product, and are distracted by a feature or visual that doesn’t contribute to the core experience?</P>
          <P>Sure, these bells and whistles are important. One could argue that “the details are the design”, but I think there is a time and place for these. The point here is to not let these distract from the foundational experience of what you are making. No matter how amazing this extra detail is, no one will even have a chance to use it if the core workflow isn’t where it needs to be.</P>
          <P>Focus on building the foundations of the product or feature first. Don’t make sacrifices in this area to accommodate a “cool” animation idea you had. This focus leads to a better process as a team and an individual.</P>
          <P>Getting these core elements and workflows figured out let’s you add that second layer of icing on top that improves the experience. Putting the icing before you put the cake doesn’t make sense does it?</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FiftyFour;
