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

class Three extends Component {
  render() {

    const imgThree = require('../../../img/roc-volume-3-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2%20via%20%40fromcortes"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2"
          googleLink="https://plus.google.com/share?url=https%3A//www.facebook.com/sharer/sharer.php?u=https%253A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%2523.2iqcydlb2" />
        <div id="3" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgThree} imgAlt="The Advantages of Failing" />
          <div className="mb5 tc">
            <H size={1}>The Advantages of Failing</H>
            <span className="blue pr3">Volume 3</span>
            <span className="black-50">Published Sep 29 2016</span>
          </div>

          <P>Hey! Welcome to Volume 3 of The Rate of Change, hope your having a great week! As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>This week I wrapped up the development side of things for Calligritype’s new website. Still working out some details, but I’ll let you know once it goes live!</P>
          <P>I started on the next side project from my backlog list. This project is getting into some territory that I haven’t explored before, but I’m excited to learn and see how it all works out! I’ll give you guys details as soon as I can.</P>
          <P>I was able to create a smoother transition between colors on the color changer for Quarry’s website, it’s even more fun now! <L hrefLink="http://www.usequarry.com">Check it out →</L></P>
          <H size={2}>Personal Life</H>
          <P>Made a little face lift to my personal website this week. Slick, simple, and straight to the point.</P>
          <P>If you know me, you know I love dogs. I’m meeting with an adoption center this week about adopting a new dog! Looking to adopt a greyhound so my Italian greyhound can have a (much larger) friend.</P>
          <P>I booked my first vacation since going into the full-time work life. I’ll be in Florida at the end of October for a week to spend some time with my family and old friends. I can’t wait!</P>

          <LineBreak />

          <P><DropCap>F</DropCap>ailing sucks. From a young age we’re taught not to fail in school. Doing well was rewarded, failure was looked down upon. That’s 13 years of being wired not to fail. You went to college? Tack on at least 4 more. So let’s see, that’s 17 years of being told failure is a bad thing.</P>
          <P>Failure in school was terrifying for me. I grew up in a strict hispanic household where the letter B didn’t exist. In the end it did help me in many aspects, but I had to learn a tough lesson on my own because of it:</P>
          <P><strong>Failure is a good thing.</strong></P>
          <P>I used to question my work and my ideas so much when I was first starting out in design. I would abandon ideas often right at the start, before even thinking them through entirely. If I didn’t know how to do something right off the bat, I threw it out and thought I needed to do better.</P>
          <P>I’ve had some <em>really</em> bad and not feasible ideas. If you have followed me or my work for a while, you may know about some of these. <L hrefLink="https://www.instagram.com/calligritype/">Calligritype’s</L> old website, <L hrefLink="https://dribbble.com/shots/2329055-Chewse-App-Home-Screen">my Chewse app idea</L>, and my <L hrefLink="https://dribbble.com/shots/2290338-Easy-Notes-Sign-Up-Form">Daily UI challenge</L>, just to name a few. <L hrefLink="http://www.usequarry.com/">Quarry</L>, which has turned into one of my favorite ideas, started as something completely different than what it is today. I abandoned the other idea and kept the name because I liked it. Or, what about back when I wanted to be a 3D illustrator or lettering designer? Anyone remember those?</P>
          <P>As difficult as it is to admit those failures, I have learned an absurd amount from each of them. All my current and upcoming projects are a result of many failures. These failures gotten me to the skill level I am today and have taught me how to filter my ideas to what is possible or even worth pursuing. I’ve learned about myself and others as well as design and business. Heck, I have even picked up code now and am already coding my ideas on my own.</P>
          <P><strong>Over time, I learned to accept and embrace the possibility of failure.</strong></P>
          <P>Failure is the best first-hand learning experience. No one has to tell you or try to convince you of something because you learned on your own what went wrong. You then get back up, and take that knowledge to pursue your next venture.</P>
          <P>So my advice to you is <em>go for it</em>. Try different approaches to different problems. Ask for advice. Learn from the failures of others. Make your own mistakes. Some of your ideas won’t work, and that’s okay. You’ll learn from them and be better prepared for how to tackle the next one.</P>
          <P>Failure isn’t something to be ashamed of.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default Three;
