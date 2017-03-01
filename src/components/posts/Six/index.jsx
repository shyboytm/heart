import React, { Component } from 'react';

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

class Six extends Component {
  render() {

    const imgSix = require('../../../img/roc-volume-6-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Break%20Your%20Comfort%20Zone%20by%20%40fromcortes%20http%3A//blog.cortes.us/break-your-comfort-zone"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/break-your-comfort-zone"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/break-your-comfort-zone" />
        <div id="6" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgSix} imgAlt="Break Your Comfort Zone" />
          <div className="mb5 tc">
            <H size={1}>Break Your Comfort Zone</H>
            <span className="blue pr3">Volume 6</span>
            <span className="black-50">Published Oct 20 2016</span>
          </div>

          <P>Hey! Welcome to Volume 6 of The Rate of Change, hope your having a great week! As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>After a couple weeks of a quiet launch, I finally launched Shop Drones Co. under Quarry this week. <L hrefLink="http://shopdrones.co">Check out the site live here</L> and see some previews below! If you or someone you know is in the market for a drone, let us help you 😁</P>
          <P>Putting the final touches on my newest side project and things should be ready to go, get excited! Just need to finish filling in some of the copy for the marketing site and then going to get some critique from a few people privately. If you’d like to help critique, please reach out to me!</P>
          <H size={2}>Personal Life</H>
          <P>Juli was gone over the weekend for a few days, so I had to stay home babysitting Milo all weekend, didn’t even leave my apartment! It was a great time though to enjoy my place and just catch up on some work and thoughts. Crazy how much time alone can help, I definitely recommend it.</P>
          <P>Starting next week, I’ll be going on a 2 week vacation! Going to be in South Florida next week and then traveling to San Francisco the week after. I’m really looking for some recommendations and people to meet in SF, please reach out to me if you have any ideas!</P>

          <LineBreak />

          <P><DropCap>If</DropCap>you are like me, you love the presence of familiarity and routine. My personality type is geared towards not going out of my comfort zones and a preference to my daily schedule. I wake up, eat, work, eat, side-project work, sleep. With a small variety of things mixed in and errands I need to run, that’s usually how my weekdays go.</P>
          <P>As much as I enjoy this set schedule and routine, over time I start to notice myself run dry on creativity, motivation, and confidence. Seeing and experiencing the same things each day inhibits my mind from exploring and thinking outside what I am used to. And how can I build things for people without seeing who those people are and what moves them? Being confined makes me overthink and question a lot of the work I make sometimes.</P>
          <P>As creatives, I think this happens to a lot of us. We love to be in our own little spot away from distractions to be able to work. And even if you have the best apartment in town or the best desk setup, it gets to a point where creativity runs dry.</P>
          <P><strong>The fix? Breaking your comfort zones.</strong></P>
          <P>Getting outside of what is familiar to you has the incredible ability to supercharge your ideas and creativity. New experiences can provide different perspectives on topics and ideas. Meeting new people and talking with friends can provide different angles and attitudes based on different context.</P>
          <P>For me, changing my workspace is crucial to a healthy and creative work environment. Being confined to a particular space is a sure way to limit my creativity and leave me feeling frustrated. Because I work remote, I try and change my “office” for the day every day. Whether that being walking to the nearby coffee shop, working at my dining table instead of my office, or driving to my favorite coffee shop 20 minutes away. This really helps me break my normal comfort zone of where I work without altering too many variables I am familiar with. A lot of my best ideas have come from observing experiences outside of my usual day-to-day.</P>
          <P>Depending on what you feel comfortable with, you’ll have your own level of discomfort that helps you. It could be going on a walk, going out with friends, working outside, taking a trip, etc. It’s all about giving your mind and eyes a break from what they are used to and welcoming new experiences to contribute to your thought process.</P>
          <P>Having multiple perspectives and angles in Design is crucial to creating great products. Users and outside forces are great influences for innovating and connecting ideas.</P>
          <P>Be intentional with seeking to break your comfort zone, it might just be the spark for breaking through that creative wall or coming up with a new project idea.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default Six;
