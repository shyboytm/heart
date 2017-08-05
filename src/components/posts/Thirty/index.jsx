import React, { Component } from 'react';

import Content from '../../Content';
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

class Thirty extends Component {
  render() {

    const imgThirty = require('../../../img/roc-volume-30-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Making%20Success%20Sustainable%20by%20%40fromcortes%20http%3A//blog.cortes.us/making-success-sustainable"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/making-success-sustainable"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/making-success-sustainable" />
        <Content id="30" >

          <Image imgSrc={imgThirty} imgAlt="Making Success Sustainable" />
           <div className="mb5 tl">
            <H size={1}>Making Success Sustainable</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 30</span>
            <span className="black-50">Published Apr 30 2017</span>
          </div>

          <P>Welcome to Volume 30 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>In the beginning stages of working with a new friend of mine on a new project idea. Obviously I can’t say much, but let’s just say it’s going to be more useful than the past static sites I’ve made with Quarry. And I may be streaming the process entirely from start to finish, so be sure to follow on YouTube and Twitch for that.</P>
          <H size={2}>Personal Life</H>
          <P>I can’t believe it’s been 30 weeks of me writing this newsletter to you! Thank you for all your support and cheers to many weeks to come. As always, if there is something you’d like to see or something I can do better in these newsletters, please feel free to reach out!</P>
          <P>This past week I was in Nashville for a few days. The traveling kind of made me miss when I used to vlog where I had all these trips and occasions documented to look back on.</P>
          <P>I’ve been streaming quite a bit and having a lot of fun being open and transparent while others interact with me in the chat. We’ve been making my new personal site and it’s coming along really well. Be sure to follow the streams and see my schedule here: <L hrefLink="twitch.tv/cortesarts">twitch.tv/cortesarts</L></P>

          <LineBreak />

          <P><DropCap>S</DropCap>omething I’ve always found difficult when I was first starting out was how to stay motivated. Even today I still struggle sometimes with feeling confident and successful with the work I’ve accomplished. Over time, I learned a way to keep myself motivated and on track for what I am working on. I like to think of it as sustainable success.</P>
          <P>Sustainable success is simply just a way to replicate the feeling of success and motivation over and over again. A simple way to do this is to think about your goals differently; take your goals and break them into the smallest tasks you can think of. I recommend writing these down and nest tasks to larger overall goals.</P>
          <P>Usually, completing a few small tasks sub consciously is something you do not really think about, you just do them, right? This new way lets you have a visual completion of tasks, leaving you feeling that you’ve accomplished more than you would normally think. I tend to get down on myself when I am not working, but having a list of things I have already accomplished that day helps me really unplug and take a break.</P>
          <P>It may seem like a daunting task to get all your tasks broken down like this, but in the long run it actually makes you more productive and gives you a set of actionable tasks to act upon, rather than trying to tackle a giant task all at once.</P>
          <P>Try it out and let me know if it works for you!</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default Thirty;
