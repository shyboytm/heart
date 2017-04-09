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

class TwentySix extends Component {
  render() {

    const imgTwentySix = require('../../../img/roc-volume-26-cover.png');
    const imgUtility   = require('../../../img/postImgs/utility-fieldy.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=How%20to%20Keep%20Learning%20and%20Stay%20Fulfilled%20by%20%40fromcortes%20http%3A//blog.cortes.us/keep-learning-stay-fullfilled"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/keep-learning-stay-fullfilled"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/keep-learning-stay-fullfilled" />
        <div id="26" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgTwentySix} imgAlt="How to Keep Learning and Stay Fulfilled" />
          <div className="mb5 tc">
            <H size={1}>How to Keep Learning and Stay Fulfilled</H>
            <span className="blue pr3">Volume 26</span>
            <span className="black-50">Published Mar 9 2017</span>
          </div>

          <P>Welcome to Volume 26 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>I updated Fieldy earlier this week now that Field Notes introduced their latest edition, <L hrefLink="https://fieldnotesbrand.com/products/utility">Utility</L>! I added the latest wallpaper that you can download for your phone or desktop if you’d like <L hrefLink="http://www.fieldy.co/">here</L>. I’m also thinking about making stickers available as well!</P>
          <Image imgSrc={imgUtility} imgAlt="Fieldy Utility" />
          <H size={2}>Personal Life</H>
          <P>Now that I’m back home, I’m back to streaming on Twitch, and now I have a schedule! We’ve been working on some illustrations and coding my new personal site from scratch (all recorded on YouTube as well). I’m hoping to keep this up for a long time so I’d love to see you there to become a part of the community that hangs out with me when I work.</P>
          <P>I’m usually pretty good at keeping relatively healthy and working out, but this week I’ve started focusing a bit more on it again. It really helps me feel more relaxed and focused with my work and personal life. Can’t recommend keeping a healthy lifestyle enough!</P>

          <LineBreak />

          <P><DropCap>B</DropCap>ecoming complacent in what you know is a common theme you see in the world. Being comfortable with your life and the amount that you know about where you specialize is common. I believe this theme is quietly accepted as commonplace in society and a large part of the reason people begin to dislike their lives and/or jobs and not feel challenged.</P>
          <P><strong>Constant familiarity is repetitive and mundane, leaps of unfamiliarity provide obstacles that lead to fulfillment.</strong></P>
          <P>Ever since I started learning design, my favorite parts of my work have always been when I was learning something new and trying it out. A new trick in Photoshop or Illustrator, a new program, a new medium of design, etc. As a result, I’ve tried just about every facet of design (3D, animation, prototyping, etc.) and was able to land on branding, illustration, and UI/UX as my areas of focus. Over the past year or so I’ve been learning to code as well, learning something new all the  time in that realm. I started with web development and am now beginning to learn iOS development to compliment my design expertise. As an illustrator who usually works in vector, I am also starting to extend my abilities to analog and digital drawing/painting to extend my knowledge as an illustrator.</P>
          <P>Constantly keeping your abilities on edge is one of the best ways to stay interested and improving in your work and life. I like to think of this phenomenon as an infinite loop, each loop making us better and one step closer to our goals in life. Here’s a visual representation:</P>
          <P>Through repetition of the above loop, over time you will have remained happy and fulfilled in your overall life while improving little-by-little. I believe the above loop can be applied to the majority of areas in life, whether for work, personal life, a new habit, or even an area of personality. Small, sustainable inputs into the loop provide for a continuous basis you can trust.</P>
          <P>The phenomenon in the chart above is where I owe a lot of the successes in my career and has kept me sane in tough times. I tend to find myself getting caught up in self-doubt and not feeling content with my personal or work life sometimes. What I laid out for you is a process I’ve been able to trust along with providing variety in the new “things” that help me overcome these feelings when they creep up on me.</P>
          <P>Remember to trust your process and stay open to learning things from new experiences. Even if you don’t think the experience will be something enjoyable, life tends to pleasantly surprise us in these times of uncertainty. Stay positive, ask questions, and invest time to learn, I can promise you’ll be grateful you did in the long run.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default TwentySix;
