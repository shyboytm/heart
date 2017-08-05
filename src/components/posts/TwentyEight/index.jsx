import React, { Component } from 'react';

import Content from '../../Content';
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

class TwentyEight extends Component {
  render() {

    const imgTwentyEight = require('../../../img/roc-volume-28-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=How%20to%20Set%20Up%20Your%20Success%20Early%20Review%20by%20%40fromcortes%20http%3A//blog.cortes.us/set-up-your-success-early"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/set-up-your-success-early"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/set-up-your-success-early" />
        <Content id="28" >

          <Image imgSrc={imgTwentyEight} imgAlt="How to Set Up Your Success Early" />
           <div className="mb5 tl">
            <H size={1}>How to Set Up Your Success Early</H>
            <span className="blue pr3">Volume 28</span>
            <span className="black-50">Published Mar 23 2017</span>
          </div>

          <P>Welcome to Volume 28 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Still working on my new website, and no updates to sites this week!</P>
          <H size={2}>Personal Life</H>
          <P>Been working on my own time wrapping up a new song that is about 90% samples from the new Zelda BOTW game, hoping to release it sometime next week!</P>
          <P>I’ve been streaming quite a bit and having a lot of fun being open and transparent while others interact with me in the chat. We’ve been making my new personal site and it’s coming along really well. Be sure to follow the streams and see my schedule here: <L hrefLink="twitch.tv/cortesarts">twitch.tv/cortesarts</L></P>

          <LineBreak />

          <P><DropCap>H</DropCap>ow do I improve early on? How can I learn more as a beginner? How did <em>you</em> get better when you first started? A few of the questions creatives get on the regular.</P>
          <P>While I don’t mind answering these questions at all, I think there is a simple answer to all these and related questions: <strong>invest in trying everything that peaks your interest</strong>. When I first started in design, I was doing photo manipulation work for free for friends. Obviously, that isn’t where my work has landed, and has evolved over time. How you ask? I tried everything I could get my hands on.</P>
          <P>In order, facets of design I’ve tried include photo manipulation, 3D illustration, 2D animation, illustration, branding, packaging, hand lettering, iOS design, web design, front-end development, and iOS development. I am also currently trying to learn digital painting to add as a hobby for myself, and to maybe improve my existing method of illustration. Point being, I’ve tried a lot of different areas in the design world. At the time, I was just trying out things that seemed like fun (which is still important). But, later on I learned how impactful it was for me to have spent that time early on in my career learning.</P>
          <P>Over time, each of these facets of design gave me another skill to add to my artillery set that I still use today. For example, photo manipulation helped me establish a basic sense for composition and how to direct the human eye to different elements of the work. Hand lettering forced me to learn a strong sense of typographical hierarchy that I still use today in branding and web design. Learning code gave me a better sense of the possibilities on the web and influenced how I work in web design.</P>
          <P>If you’re just starting out, I recommend trying out anything and everything that peaks your interest. Be open to trying new things, and take time to invest into yourself and your skill set. There are endless possibilities of major and minor skills you can pick up on sub-consciously. You’ll thank yourself (and maybe me?) in the future, trust me.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default TwentyEight;
