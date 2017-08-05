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

class ThirtyEight extends Component {
  render() {

    const imgThirtyEight          = require('../../../img/roc-volume-38-cover.gif');
    const imginspirationTimeline  = require('../../../img/postImgs/inspiration-timeline.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=When%20to%20Seek%20Inspiration%20by%20%40fromcortes%20http%3A//blog.cortes.us/when-to-seek-inspiration"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/when-to-seek-inspiration"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/when-to-seek-inspiration" />
        <Content id="38" >

          <Image imgSrc={imgThirtyEight} imgAlt="When to Seek Inspiration" />
           <div className="mb5 tl">
            <H size={1}>When to Seek Inspiration</H>
            <span className="blue pr3">Volume 38</span>
            <span className="black-50 pr3">Published June 1 2017</span>
          </div>

          <P>Welcome to Volume 38 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>This past weekend I wrapped up the initial design work needed for <L hrefLink="http://livtra.co">Livtra</L>, my new project for tracking your life. The process was a tough one, but I really gave it my all and was able to get it done in about 2 weeks. Because of the nature of the application, there aren’t too many UX patterns I can reference to help me, so I had to spend a lot of time figuring out patterns and use cases for the application. I’m sure a lot of this work will change once we start getting beta users to help us with feedback, but we’re in a great spot now.</P>
          <P>As a result of finishing the design work, my friend Aaron and I have started building out the application and will be where most of my free time goes over the next few months. We also added SSL to our landing page to provide a more secure feel signing up for updates on our site. Speaking of, be sure to sign up for updates <L hrefLink="http://livtra.co">here</L> if you haven’t already!</P>
          <H size={2}>Personal Life</H>
          <P>This week I bought tickets to go home and visit my family in Florida finally in June. It’s been about 7 months since I’ve seen my immediate family and I have a bad habit of not visiting enough. I’m really hoping to break that habit and visit 3–4 times a year. I owe my parents everything and I need to do a better job of showing them I love and care for them. If you struggle with this too I highly recommend taking the time and invest the money to see your family. I’ll be going to Disney World in Florida with my little sister and my father, I’m super excited to go!</P>

          <LineBreak />

          <P><DropCap>In</DropCap> this day and age there is a plethora of places to seek out inspiration. Whether it be Pinterest, Tumblr, Dribbble, Instagram, etc. for digital inspiration, or being able to head to a park or coffee shop for physical inspiration. There always seems to be an outlet for where to find inspiration, with more and more being made each day. But, a topic related to inspiration that seems to always be overlooked is <em>when</em> to look for inspiration.</P>
          <P>I’ve usually been someone to look for inspiration while working on the beginnings of a new project, going back and forth with websites or places that inspire me. While I do still think this is effective, a small tweak to this routine has really helped me with how I work. Lately, instead of treating parts of my work and searching for inspiration as one in the same, I’ve started treating this more like a switch and placing each of these strategically throughout my day. Let me explain.</P>
          <P>Below, you’ll see an ideal timeline of my day. As you can see, there is a clear distinction for times that I am working and times that I am “getting inspired”. I use this term very loosely because inspiration can be a multitude of things from browsing inspiration sites, going to the gym, spending time with my family, taking a walk to pick up lunch, playing video games, etc. And of course, these sources of inspiration will be different for everyone.</P>
          <Image imgSrc={imginspirationTimeline} imgAlt="Inspiration Timeline" />
          <P>Anyways, as you can see, planning out my times for inspiration around times that I know work best for me is crucial. For example, I know I personally can’t start working right away in the morning. I usually spend the first hour or so of my day catching up on news, reading, making breakfast, and browsing sites like Dribbble to get my brain flowing for the day.</P>
          <P>After I work for a few hours in the morning, I take my lunch break around 12pm or so to refuel on inspiration. Again, this will vary depending on what I’m working on at work and how I am feeling. Sometimes I will completely take a break and read or watch videos while I eat, and sometimes I’ll be researching or browsing visual inspiration sites.</P>
          <P>I then repeat this process two more times; one to finish the day for my full-time work, and then another to work on freelance or side project work. Because of all the work I’m usually juggling, I’ve found this to be a great system for helping me be productive while having a high burnout tolerance. Like I previously mentioned, sometimes this will have to change depending on how I am feeling that day or deadlines that I have. But, having this system in place gives me a guideline to aim for each day.</P>
          <P>I can’t recommend having a system like this more as I’ve found it to be paramount in the way I work. Take some time to find a routine and schedule that works with your lifestyle and do your best to keep yourself accountable. No matter what you do for a living, I think this is applicable and crucial for keeping a balanced and productive lifestyle.</P>

          <P><em>Featured image animated by </em><L hrefLink="https://dribbble.com/dlvjose">@dlvjose</L></P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default ThirtyEight;
