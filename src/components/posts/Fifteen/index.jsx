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

class Fifteen extends Component {
  render() {

    const imgFifteen    = require('../../../img/roc-volume-15-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2%20via%20%40fromcortes"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2"
          googleLink="https://plus.google.com/share?url=https%3A//www.facebook.com/sharer/sharer.php?u=https%253A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%2523.2iqcydlb2" />
        <div id="15" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgFifteen} imgAlt="Distractions Provide Progress" />
          <div className="mb5 tc">
            <H size={1}>Distractions Provide Progress</H>
            <span className="blue pr3">Volume 15</span>
            <span className="black-50">Published Dec 22 2016</span>
          </div>

          <P>Hey guys! Welcome to Volume 15 of The Rate of Change, hope you’re having a great week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Remember when I said I was putting new projects on hold for now? Well, I lied. I had a pretty great idea over the past few days that will really help people get into learning code. That’s all I’m going to say for now, but it’s going to be great. Follow me on Twitter to stay up to date and help give me feedback, I’m going to need some help!</P>
          <P>My partner Drew finished a project of his this week called Crag Supply, a digital experience for climbers to find curated products. Check it out at <L hrefLink="http://www.cragsupply.com">www.cragsupply.com</L></P>
          <H size={2}>Personal Life</H>
          <P>This is the first year ever that I won’t be home with my parents for Christmas. It sucks, but hey, it was my choice to have 3 dogs right?</P>
          <P>My girlfriend Juli is going home for 3 weeks starting this week. I spend pretty much every day with here so it’ll be a bit weird not having her around. Doesn’t really help that it started to snow here in Saint Louis and I’m terrified of driving in icy weather (I grew up in South FL, never snows).</P>
          <P>I took on another freelance project starting this week! I can’t say anything about the client yet but it’s one of the cooler projects I’ve had to date, that’s for sure. Excited to see how it unfolds!</P>
          <P>If you didn’t know, I used to be pretty big into music. I was classically trained on violin and viola and went to school for music at first before I switched to design. Anyways, I wanted to give music another try in my spare time and started this weekend. You can listen to the track “Come Around” on Soundcloud:</P>
          <iframe width="100%" height="150" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/298494443&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

          <LineBreak />

          <P><DropCap>I</DropCap> get bored pretty easily. I can never work on something for more than a few hours, and even then I get distracted a couple times during those hours. And yet, I’m overall a pretty productive person. I upkeep a few businesses, I have a full-time job, I pursue a couple hobbies, I’m learning code, and I keep this weekly newsletter you’re reading, just to name a few. So, how can I seem to be so productive?</P>
          <P><strong>The key is to monitor and choose what you let distract you.</strong></P>
          <P>There are unproductive distractions and productive distractions. For example; Twitter, Facebook, and Instagram are obvious unproductive distractions. While they can eat away time and make you feel unproductive afterwards, there are also productive distractions. For example, I’m working on this post and I remember I was working on a native version of this blog in React for my website. If I really want to work on it, I’ll take an hour or two and do that. It’s still work towards my goals and commitments in life. It may count as “distracting” because it isn’t the task at hand that I was working on, but it’s work that I want to do that I will benefit from.</P>
          <P><em>A good word I’ve heard used to describe this is “procrastiworking”. So you’re procrastinating, but it’s on other work, not a meaningless distraction. I first heard this word used by the one and only <L hrefLink="http://jessicahische.is/awesome">Jessica Hische</L>, and it has stuck with me ever since.</em></P>
          <P>Of course it’s difficult to act on this 100% of the time. Distractions from social media and our emails creep up on us and we lose some time here and there. We sometimes have deadlines that require no distractions, it happens. The key is to do your best at catching yourself and focusing that distraction into something that benefits you personally, professionally, or both. At a point, you figure out a great balance that helps you make the best of your time.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default Fifteen;
