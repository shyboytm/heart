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

class ThirtyEight extends Component {
  render() {

    const imgThirtyEight          = require('../../../img/roc-volume-37-cover.png');
    const imginspirationTimeline = require('../../../img/postImgs/inspiration-timeline.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Design%20and%20Develop%20Smaller%20by%20%40fromcortes%20http%3A//blog.cortes.us/design-and-develop-smaller"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/design-and-develop-smaller"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/design-and-develop-smaller" />
        <div id="38" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgThirtyEight} imgAlt="When to Seek Inspiration" />
          <div className="mb5 tc">
            <H size={1}>When to Seek Inspiration</H>
            <span className="blue pr3">Volume 38</span>
            <span className="black-50 pr3">Published June 1 2017</span>
          </div>

          <P>Welcome to Volume 38 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <H size={2}>Personal Life</H>

          <LineBreak />

          <P><DropCap>In</DropCap> this day and age there is a plethora of places to seek out inspiration. Whether it be Pinterest, Tumblr, Dribbble, Instagram, etc. for digital inspiration, or being able to head to a park or coffee shop for physical inspiration. There always seems to be an outlet for where to find inspiration, with more and more being made each day. But, a topic related to inspiration that seems to always be overlooked is <em>when</em> to look for inspiration.</P>
          <P>I’ve usually been someone to look for inspiration while working on the beginnings of a new project, going back and forth with websites or places that inspire me. While I do still think this is effective, a small tweak to this routine has really helped me with how I work. Lately, instead of treating parts of my work and searching for inspiration as one in the same, I’ve started treating this more like a switch and placing each of these strategically throughout my day. Let me explain.</P>
          <P>Below, you’ll see an ideal timeline of my day. As you can see, there is a clear distinction for times that I am working and times that I am “getting inspired”. I use this term very loosely because inspiration can be a multitude of things from browsing inspiration sites, going to the gym, spending time with my family, taking a walk to pick up lunch, playing video games, etc. And of course, these sources of inspiration will be different for everyone.</P>
          <Image imgSrc={imginspirationTimeline} imgAlt="Inspiration Timeline" />
          <P>Anyways, as you can see, planning out my times for inspiration around times that I know work best for me is crucial. For example, I know I personally can’t start working right away in the morning. I usually spend the first hour or so of my day catching up on news, reading, making breakfast, and browsing sites like Dribbble to get my brain flowing for the day.</P>
          <P>After I work for a few hours in the morning, I take my lunch break around 12pm or so to refuel on inspiration. Again, this will vary depending on what I’m working on at work and how I am feeling. Sometimes I will completely take a break and read or watch videos while I eat, and sometimes I’ll be researching or browsing visual inspiration sites.</P>
          <P>I then repeat this process two more times; one to finish the day for my full-time work, and then another to work on freelance or side project work. Because of all the work I’m usually juggling, I’ve found this to be a great system for helping me be productive while having a high burnout tolerance. Like I previously mentioned, sometimes this will have to change depending on how I am feeling that day or deadlines that I have. But, having this system in place gives me a guideline to aim for each day.</P>
          <P>I can’t recommend having a system like this more as I’ve found it to be paramount in the way I work. Take some time to find a routine and schedule that works with your lifestyle and do your best to keep yourself accountable. No matter what you do for a living, I think this is applicable and crucial for keeping a balanced and productive lifestyle.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default ThirtyEight;
