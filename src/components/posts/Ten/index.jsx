import React, { Component } from 'react';

import Content from '../../Content';
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

class Ten extends Component {
  render() {

    const imgTen = require('../../../img/roc-volume-10-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Places%20to%20Help%20You%20Stay%20Inspired%20by%20%40fromcortes%20http%3A//blog.cortes.us/places-help-you-stay-inspired"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/places-help-you-stay-inspired"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/places-help-you-stay-inspired" />
        <Content id="10" >

          <Image imgSrc={imgTen} imgAlt="Places to Help You Stay Inspired" />
          <div className="mb5 tc">
            <H size={1}>Places to Help You Stay Inspired</H>
            <span className="blue pr3">Volume 10</span>
            <span className="black-50">Published Nov 17 2016</span>
          </div>

          <P>Welcome to Volume 10 of The Rate of Change, hope your having a great week!</P>
          <P><strong>Great news:</strong> I was featured on my friend’s creative talk show, called ta–lk, where I talk a bit about my story of becoming a designer and go into detail about my current work life. I talk about my projects with Quarry and what I work on at Satchel Health, as well as some general beliefs on the design world. <L hrefLink="https://www.youtube.com/watch?v=8vTTJ-W-Axc">Check out the episode here</L> 🎉</P>
          <P>As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>We’re in the quiet launch stages of our two new projects starting this week! As much as I wish I could share, I’ve gotten a ton of great feedback from a few friends that I would like to implement before sharing.</P>
          <H size={2}>Personal Life</H>
          <P>As you may have seen from my Twitter or Instagram, I’ve taken on my first freelance project in almost 5 months. I’ve turned down all projects over the past few months to focus on my own work, but I felt ready to start helping others bring their ideas to life again. Here’s a sneak peek of some of the early work for this brand, and please let me know if you or someone you know have a project I can help with!</P>
          <P>Milo, my new puppy, has been pretty sick this week. It’s been causing me to worry a bit but have been trying to stay positive and remember he’s just a puppy so it’s normal to get sick. I’m taking him to the vet the day this goes out, let’s hope he gets better quick.</P>

          <LineBreak />

          <P><DropCap>I</DropCap> am very fortunate to be able to do what I love for a living. Being a designer, illustrator, and a (amateur at best) developer lets me constantly create new things from scratch. Creating things that do not exist is a exertion of creativity, motivation, and inspiration. If you are anything like me, I am sure you can relate.</P>
          <P>Working for a long time on something can really hinder your inspiration. Creative blocks are imminent and come often if you aren’t careful. Think of your inspiration as a container, it runs dry after a period of time if there isn’t an influx of inspiration and breaks.</P>
          <P>Thus, I’ve created a short list of my favorite places to find inspiration for your work. These are just a few options and I’d love to hear where you personally find inspiration for your work. Hope you enjoy!</P>
          <H size={2}>Outside</H>
          <P>I spend a lot of time indoors. I work a 9–5 job indoors and once that’s done, I want to sprawl out on my couch and watch TV, play video games, or catch up on some personal work.</P>
          <P>Surrounding yourself in the same environment day-in and day-out limits the amount of ideas and visuals added to your melting pot of inspiration. Sure there is a lot you can see online, but there’s something different and inspiring about the outside world. New sounds, sights, smells, people, and thoughts.</P>
          <P>Whenever I feel a creative block, stepping outside is my go-to source for a refreshing break. I always come back with a new perspective from allowing thoughts to stir. I can’t recommend this enough.</P>
          <H size={2}>Coffee Shops</H>
          <P>Going outside isn’t always an option for everyone and I personally can’t work outside. If you need a happy medium between being outside of your normal workspace and being outside, your local coffee shop is your best bet. Nothing will boost your creativity and motivation like a nice quiet coffee shop with great coffee, interesting people, and enjoyable music.</P>
          <P>This is my personal favorite place to go when I feel cabin fever and a lack of motivation creeping in. To me a coffee shop feels like a break, but I can still get a couple things done while there instead of taking a complete break.</P>
          <H size={2}>People in Your Field</H>
          <P>Take a look around at your industry. You have friends, acquaintances, and mentors that you look up to from a personal and professional level. In that circle of people, no matter how small or big, is an instant spark of motivation.</P>
          <P>People all around you are doing great things that inspire and help others. Search for a diverse set of people to surround yourself with, both physically and online. Take notice, give praise when due, and use that fuel for your own work and ventures.</P>
          <H size={2}>Activities Outside of Your Work</H>
          <P>As much as you may love your work, it’s important to provide different sources of inspiration to keep doing your best work. A lot of the thought process and problem solving that goes into your work comes from what you do outside of work. Pursuing various activities develops different parts of your brain, giving you a larger subset of thoughts and experience to base your creative decisions on.</P>
          <P>It may seem difficult to go outside your comfort zone if you’re anything like me, but it’s worth it. This is a great excuse to pick up a new hobby like cooking, rock climbing, knitting, etc. You don’t need to do anything drastic at first or even at all if you don’t want to. Small things like taking walks, meeting new people, or trying new restaurants are easy places to start.</P>
          <H size={2}>Breaks</H>
          <P>As obvious as it sounds, don’t forget to take breaks. You need time to recharge and reflect on your work. Take time and enjoy the little things in your life; hang out with friends, see your family, eat great food, etc. Your work isn’t your life. You were put here to enjoy what life has to offer, not to live stuck to a computer screen in a cubicle.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default Ten;
