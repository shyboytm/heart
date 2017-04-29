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

class ThirtyFour extends Component {
  render() {

    const imgThirtyFour = require('../../../img/roc-volume-33-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink=""
          facebookLink=""
          googleLink="" />
        <div id="33" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgThirtyFour} imgAlt="Subjective Versus Objective Design" />
          <div className="mb5 tc">
            <H size={1}>Subjective Versus Objective Design</H>
            <span className="blue pr3">Volume 34</span>
            <span className="black-50 pr3">Published Apr 27 2017</span>
          </div>

          <P>Welcome to Volume 34 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <H size={2}>Personal Life</H>

          <LineBreak />

          <P><strong>Subjective</strong>: based on or influenced by personal feelings, tastes, or opinions.</P>
          <P><strong>Objective</strong>: (of a person or their judgment) not influenced by personal feelings or opinions in considering and representing facts.</P>
          <P>So, you’re probably wondering why and how these are applicable to you as a designer. From an outside perspective, a designer’s role may seem mainly subjective. After all, we make things work and look pretty, right? All jokes aside, I believe a designer’s job is ~75% objective and ~25% subjective. The mix of how well a designer can understand that 75% objectivity and implement the right amount of subjectivity is what leads to better and more refined designers in the tech industry. I believe this is a paramount reason of separation when it comes to good and great designers.</P>

          <H size={2}>Objective</H>
          <P>So what does objective design mean for you? Objective design is driven by factual, usually business driven, data. Feedback from users, A/B testing, business goals, etc. are all important aspects of objective design. As a designer, it’s your job to gather and digest this data and apply it to your design work in a way that benefits stakeholders. “Benefit” can be something like an improved workflow for users or a button placement that drives better sales for the business. The important part here is the design is influenced by actual evidence that is not influenced by any opinions of individuals within a company.</P>
          <P>An acceptable example of this could be a certain text style not being legible by those that are color blind or visually impaired. This is an obvious and factual flaw in a design that needs to be addressed. No opinions are a direct influence of this scenario.</P>

          <H size={2}>Subjective</H>
          <P>On the other side of the spectrum, subjective design is opinion based. You’ll almost never have design work that is purely subjective (that’s what we call art!). Design always has some sort of purpose and problem solving elements involved. Whether it be a brand for yourself to attract more clients or an accompanying illustration to build trust in an app, design has a purpose behind the visuals.</P>
          <P>The part of subjective design that is important is the 25% I spoke about earlier. Although this percentage can fluctuate depending on the task, there is usually a personal opinion to guide what looks and feels best. This is where personal talent comes in because it’s based on your experience and level as a designer. Creative aspects of design shine through here and allow for different types of exploration.</P>

          <H size={2}>How to Mix Both</H>
          <P>I personally don’t believe anyone can be a great designer without both subjective and objective design. Sure, the percentages and pressure can fluctuate based on different scenarios, companies, and tasks, but in the end it’s a balancing act of both.</P>
          <P>An important note to make is keeping track of and considering different elements in work environment and which side of design they affect. Learning to refine and improve this process and balance is a core skill that will have a crucial impact on your work and level as a designer.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default ThirtyFour;
