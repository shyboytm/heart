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

class FiftyFive extends Component {
  render() {

    const imgFiftyFive = require('../../../img/roc-volume-55-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=How%20I%20Market%20Mysefl%20–%20Designer%20or%20Developer?%20by%20%40fromcortes%20http%3A//blog.cortes.us/marketing-yourself-as-designer-or-developer"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/marketing-yourself-as-designer-or-developer"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/marketing-yourself-as-designer-or-developer" />
        <Content id="55">

          <Image imgSrc={imgFiftyFive} imgAlt="How I Market Myself — Designer or Developer?" />
          <div className="mb5">
            <H size={1}>How I Market Myself — Designer or Developer?</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 55</span>
            <span className="black-50 pr3">Published Sep 29 2017</span>
          </div>

          <P><DropCap>As</DropCap> a designer who codes, a multitude of options can come into play when figuring out the best to market myself to companies and in general. A little over a month ago I was on the job hunt and received a couple questions around this subject from friends and acquaintances of mine. As someone who is very involved and active in the development side of their work, how do I market myself not only to companies, but just in general?</P>
          <P>While I don’t have all the answers here and believe it is entirely up to your specific situation, I’d love to provide some of my own input here.</P>
          <P>Personally, I have always considered myself a designer. This might change in the future of course, but my passion lies in the creative side of product work. I love being able to solve complex scenarios that help bring a simple solution to light. It’s what I work for and the main source of happiness in what I do.</P>
          <P>However, my advantage comes in knowing how to actually implement and solve these problems in code as well. Knowing what’s feasible to be coded and helping in the implementation process is an advantage I have over the next designer. Being capable of a developer’s mindset while being rooted and specialized in design has played a huge part in finding jobs. Not only was I more qualified than other designers, but was also able to open up options to design jobs on the edge of development such as a Design Engineer role.</P>
          <P>As of now, my go-to description of myself is “designer and illustrator that codes”. While I do feel confident with my specific development skillset, I feel more comfortable with my phrasing of choice. Framing myself as a designer that knows how to code instead of a “designer and developer” is unique for one, but also shows I specialize in design but happen to know the world of code as well. Because it’s true; I definitely know and feel comfortable in the world of development, but companies usually like to see some sort of specialization as well.</P>
          <P>Specialization has always been a hard concept for me to grasp, I’ve always been the “jack-of-all-trades” person. But, over time I came to realize companies prefer some sort of specialization. You can’t just say “I do it all”, that’s not helpful for companies to know where you would help them out the most. Although I still struggle with this at times and like to show I have many interests, I think this general approach to being a T-shaped person in skill is advantageous on a personal and professional brand level.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FiftyFive;
