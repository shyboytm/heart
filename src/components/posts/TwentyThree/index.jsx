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

class Twenty extends Component {
  render() {

    const imgTwentyThree = require('../../../img/roc-volume-23-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=How%20Sacrifices%20Provide%20Productivity%20by%20%40fromcortes%20http%3A//blog.cortes.us/how-sacrifices-provide-productivity"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/how-sacrifices-provide-productivity"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/how-sacrifices-provide-productivity" />
        <div id="23" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgTwentyThree} imgAlt="How Sacrifices Provide Productivity" />
          <div className="mb5 tc">
            <H size={1}>How Sacrifices Provide Productivity</H>
            <span className="blue pr3">Volume 23</span>
            <span className="black-50">Published Feb 16 2017</span>
          </div>

          <P>Welcome to Volume 23 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Working on wrapping up my native blog so things for Quarry are on pause until I get this done. We’re starting on a new project soon!</P>
          <H size={2}>Personal Life</H>
          <P>I started streaming my design, illustration, and code work on Twitch this week! I’ve done 3 streams so far and planning on doing them a couple nights a week when I’m home. I’d love to see you there to hang out, chat, and ask me questions about work to learn a few things. Feel free to follow on Twitch here: <L hrefLink="https://twitch.tv/cortesarts">twitch.tv/cortesarts</L>!</P>
          <P>My girlfriend and I celebrated our 4th Valentine’s Day together this week. Whether you have a partner or not, I hope you had a great holiday!</P>
          <P>I’ll be heading to Asheville for a whole week and a half retreat to work with the team at Satchel Health on a new project we have coming up. Although I can’t speak on what we will be working on, I’m definitely going to try and document our trip the best I can and hope you will enjoy it 😅</P>
          <P>I released a new song last Friday! Take a listen below or check it out on my Soundcloud profile</P>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/307057092&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

          <LineBreak />

          <P><DropCap>F</DropCap>irst, a bit of backstory: Last week, I finished up a new song. As per usual, I shared it out on my social media outlets and posted the link in some Slack channels filled with some friends and colleagues of mine. I usually get a couple emoji responses and some words of praise that I gratefully accept. But, sometimes I’ll get a line or two about my time management. For example, I got this yesterday:</P>
          <Blockquote>DUDE. That is rad. Way to go man. You need to share your time management tips — how on earth do you do it all.</Blockquote>
          <P>I laughed it off and made a joke about not hanging out with anyone, not sleeping, procrastination, etc. But, as I was thinking about what to write for you today, I thought that would be a great topic to write about. I’ve written to you recently about finding your own path to productivity, but I think hearing how others are productive can be beneficial. I also noticed that a big part of my productivity comes from sacrifice.</P>
          <H size={2}>Sacrifice One, Add One</H>
          <P>Over the past few years, productivity has come and gone for me. I’ve had to adjust and try different ways of working to best fit my personality. Fortunately, I’ve gotten to a point where I know how to adjust quickly and split my time accordingly to fit deadlines for work and personal projects. I’m a big fan of video games so I’ve had to learn how to create a healthy balance of work and play for myself.</P>
          <P><strong>The biggest contributor to my time management has come from sacrifice.</strong></P>
          <P>I don’t hang out with people much. I don’t go to parties or clubs. I put off certain projects for more important ones. I actively avoid things I’m not interested in to make time for things I am interested in. I <L hrefLink="http://hyperallergic.com/50227/procrastiworking-your-way-to-creative-success/">procrastiwork</L> often. I sleep less than I should (not proud of that one). I use Saturday mornings for deep work and writing instead of sleeping in.</P>
          <P>Some of these aren’t the healthiest decisions admittedly and definitely need work. And being an introvert helps me be okay with not seeing friends too often. But, the point here is I weigh what things are most important to me and cut out the less important options in their place. This allows me to only work on freelance projects I care about, create and manage multiple <L hrefLink="http://www.usequarry.com/">side businesses</L>, and work a full-time job while still having time to spend with my girlfriend and dogs, make music, and play video games.</P>
          <H size={2}>My Advice to You</H>
          <P>My advice is to step back every so often, think about what is most important and least important to you. Recognize how much time and effort is going to each, and adjust according to what you think needs more or less time. If playing through a new video game is important to you, sacrifice an hour or two here and there to play it. If working out is important to you (and it should be), go to sleep an hour earlier and workout before you start your day.</P>
          <P>Finding a balance of work, life, and sleep is not an easy task. No one has it 100% figured out, so be patient. Over time, you’ll find what works for you and leaves you feeling productive while still being relaxed.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default Twenty;
