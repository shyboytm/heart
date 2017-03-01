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
import PostEnd from '../../post-elements/PostEnd';
import Social from '../../type-elements/Social';

class Two extends Component {
  render() {

    const imgTwo = require('../../../img/roc-volume-2-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Trends%20Fade,%20Technique%20Does%20Not%20by%20%40fromcortes%20http%3A//blog.cortes.us/trends-fade-techniques-dont"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/trends-fade-techniques-dont"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/trends-fade-techniques-dont" />
        <div id="2" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgTwo} imgAlt="Trends Fade, Technique Does Not" />
          <div className="mb5 tc">
            <H size={1}>Trends Fade, Technique Does Not</H>
            <span className="blue pr3">Volume 2</span>
            <span className="black-50">Published Sep 22 2016</span>
          </div>

          <P>Hey! Welcome to Volume 2 of The Rate of Change. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>I pushed a few small updates to Quarry’s website this week including a color randomizer button that you can see at the top of the homepage. I also added a few subtle but fun hover animations that you can see throughout the site.</P>
          <P>I wrapped up a new page for Fieldy, <L hrefLink="http://www.fieldy.co/reference.html">a reference page</L>. Here people can find reference for learning about Field Notes separated into specific topics.</P>
          <P>I started developing <L hrefLink="https://www.instagram.com/calligritype/">Calligritype’s</L> new website and it’s coming out perfectly from a usability and visual standpoint. I’m really excited to put it out into the world soon. More on that in the next few weeks.</P>
          <H size={2}>Personal Life</H>
          <P>My girlfriend and I celebrated 4 years of dating this week ❤️</P>
          <P>I’ve been debating about getting back into music production a lot this week. The <L hrefLink="https://www.ableton.com/en/push/">Ableton Push</L> looks awesome, anybody have any experience with it or recommendations?</P>
          <P>This week I was given the go-ahead on starting to work out again after my elbow injury a couple months ago, excited to get back to it!</P>

          <LineBreak />

          <P><DropCap>L</DropCap>ast week, I spent a few days at work researching accessibility. There are a few overarching issues that I have been trying to improve with our product at Satchel Health. Most of them caused by the lack of accessibility protocols within our app. Admittedly, it was partly my fault and a result of working in the high-paced startup world where things need to get done quickly. At the time of our first build, I wasn’t leading the design team and was also a full-time student. I did my best to get things done with the time that I had.</P>
          <P>I’ll skip over a bit of the research portion of this experience and get right into a thought I had while learning: <strong>trends fade, technique does not.</strong></P>
          <P>Currently, we’re seeing a huge trend in minimalism in the design world. Overall, I think it is a great style of work. It allows us to create logos, illustrations, websites, and marketing materials that communicate quickly and easily. But, when it comes to the web, not everything we are creating is in the best interest of users.</P>
          <P>A lot of what we see is created mainly to fit within today’s design trends. Big shadows, low contrast text and elements, small text paired with enormous headers, etc. Don’t get me wrong, I love how all these elements look on a visual level, but how much of this actually <em>works</em> well? Not much of it. For products not targeted towards others in your field, you’ll find users struggle to navigate and use your work.</P>
          <P>That seems to always be a bickering point for designers nowadays. We all know the typical popular page of Dribbble, filled with these “web concepts” that will never work when you consider real stakeholders. A lot of us are guilty of that as well (yes, myself included).</P>
          <P>There is nothing inherently wrong with making work like this for practice or to flush out ideas, I think it helps to push the limits of our creativity. My point is that when you are designing, think about what you are making will be once the trend dies out.</P>
          <P>It is important to create something functional that is considerate of your users. The technique and intention behind the work you ship is at the core of it’s usability and will be what remains after the trends die out.</P>
          <H size={2}>My Advice</H>
          <P>First would be to <strong>keep the basic principles of great design in mind while you work.</strong> Composition, Contrast, Shape, Balance, Proportion, Rhythm, Emphasis, and Unity should be at the core of your process. Most of the time we keep these elements in mind sub-consciously, but it doesn’t hurt to step back and remind yourself.</P>
          <P>These principles are the reason well-designed work feels, looks, and functions so well. Think of the last well-designed work you saw that you fell in love. Try and find the above principles. I can bet you’ll find almost every aspect there and accounted for.</P>
          <P>My second piece of advice would be to <strong>learn from what you know works and put your personal (or the brand’s) twist on it.</strong></P>
          <P>We’re at a point in the creative world where pretty much everything has been done before. Nobody makes anything 100% new, we just take our past experiences and things we’ve seen to drive our creativity. A great book about this topic is <L hrefLink="http://%3Ca%20%20href%3D%22https//www.amazon.com/gp/product/0761169253/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0761169253&linkCode=%7B%7BlinkCode%7D%7D&tag=shodro-20&linkId=%7B%7Blink_id%7D%7D%22%3ESteal%20Like%20an%20Artist:%2010%20Things%20Nobody%20Told%20You%20About%20Being%20Creative%3C/a%3E%3Cimg%20src=%22//ir-na.amazon-adsystem.com/e/ir?t=shodro-20&l=am2&o=1&a=0761169253%22%20width=%221%22%20height=%221%22%20border=%220%22%20alt=%22%22%20style=%22border:none%20!important;%20margin:0px%20!important;%22%20/%3E">Steal Like an Artist</L> if you want to learn more.</P>
          <P>Some of the best design work in my opinion is the work that uses pre-existing, proven-to-work principles to their advantage. For example, things like grids and lists for selections is something we all use and put our own twist on. Whether it be an e-commerce site with product choices or a list of blog posts, this technique is <L hrefLink="http://alistapart.com/topic/layout-grids"><em>proven to work</em></L> visually and fundamentally, which is why it is used so often. Familiarity is a good thing.</P>
          <P>This is true for other areas of design as well. A friend of mine and one of my favorite brand designers, <L hrefLink="http://www.danielpatricksimmons.com/">Daniel Patrick Simmons</L>, does this incredibly well. If you look at his work, you can see basic shapes and compositions used throughout his work. But, what makes the work unique, is he puts his style and the client’s needs into a visual solution based off of simple, pre-existing solutions. You’ll find a lot of well-done work has a similar approach to design solutions.</P>
          <P>Focus on the technique and principles at the core of the work you create. Whether it be branding, illustration, lettering, web design, development, etc, you owe it to yourself and your audience to create a solution focused on usability and great design, not something relying on a trend.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default Two;
