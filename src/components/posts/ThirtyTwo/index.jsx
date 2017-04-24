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

class ThirtyTwo extends Component {
  render() {

    const imgThirtyTwo = require('../../../img/roc-volume-32-cover.gif');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Disadvantages%20of%20Working%20Remote%20by%20%40fromcortes%20http%3A//blog.cortes.us/disadvantages-of-working-remote"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/disadvantages-of-working-remote"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/disadvantages-of-working-remote" />
        <div id="32" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgThirtyTwo} imgAlt="Disadvantages of Working Remote" />
          <div className="mb5 tc">
            <H size={1}>Disadvantages of Working Remote (and Their Fixes)</H>
            <span className="blue pr3">Volume 32</span>
            <span className="black-50">Published Apr 20 2017</span>
          </div>

          <P>Welcome to Volume 32 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Although I wasn’t able to stream this week (I’ll be streaming this weekend though) because I was traveling, I’ve still been working on my newest product that I am building. I was able to get a good amount of work done on the branding side of things and met with a few friends to go over some ideas I have for the product and getting their feedback and input on them. This is always super important for me to get some more validation on my ideas and I think it will be an influencer in how this product will be built. I’m super excited for what’s to come!</P>
          <H size={2}>Personal Life</H>
          <P>As I mentioned, I’ve been traveling this week and was in Nashville again to meet with the team at my full-time gig. A lot of process based improvements are being implemented so it’s been great to be in town to go over a lot of the changes that are going on.</P>
          <P>Since I was in Nashville, I’ve been able to catch of with a few of my friends here. As usual, they leave me feeling super inspired about the things they are doing and some of the hobbies they are pursuing. Just a friendly reminder to surround yourself with people that will have a positive impact on your life!</P>
          <P>Last but not least, I launched my new website this week! You may or may not have seen or joined in on the streams of me building it from scratch, but it feels great to finally have it in the wild after working on it for weeks. I’m incredibly happy with how it turned out and I even went through and added a couple easter eggs throughout the site, good luck finding them! Check out my new website live at <L hrefLink="http://www.cortes.us">www.cortes.us</L></P>

          <LineBreak />

          <P><DropCap>T</DropCap>his week, I wanted to write another article for those interested in working remote and a bit more about the life of working remote. Of course, every experience will be different depending on the person and the company they work at, but I thought I’d give some general negative points I’ve experienced about not working in an office. Although I try and keep my outlook and work in a positive light, I think it’s also a good thing to consider in case you were looking to go remote.</P>
          <P>Be sure to check out part 1 first that goes over the positive points of working remote!</P>

          <H size={2}>1. Not Seeing Your Team</H>
          <P>One obvious thing to consider when working remote is not being able to see your team. While this isn’t a huge deal, it can sometimes be difficult from a work and relationship stand point. Although remote calls and the tools we have nowadays help, sometimes being there in person helps communicate an idea a bit better. If you start remote from the beginning, this makes it difficult to build a foundational relationship sometimes, depending on the person.</P>
          <P>A way to combat this is to make a conscious effort to visit your team whenever possible. I visit 1–2 times a month to work alongside my team and get some face time with everyone. Being the only designer currently, this is very helpful when expressing new ideas to the rest of my team that might be difficult to communicate while away from the office.</P>

          <H size={2}>2. Having to Over Communicate</H>
          <P>95% of my communication with the rest of the company is text based communication. As you probably know, minor details and tone of voice through text can be difficult to communicate well, which can lead to mishaps if you’re not careful. There have been a few times where something I thought was completely obvious wasn’t, and led to pushing back certain deadlines. I’ve also mistakingly disrespected other team members because of a certain wording, even though I meant it in a completely different way.</P>
          <P>A simple solution I’ve found for this is to reread what you are going to say whenever necessary. Think about whether you are providing all information necessary, think about what is obvious to you but not to them and communicate that. Ask questions to clarify. And last but not least, try to be extra nice with how you communicate with others, it goes a long way!</P>

          <H size={2}>3. Being Your Own Office Manager</H>
          <P>At most companies, you have someone that handles the amenities in an office as well as keeping the office in check. Accepting mail, making coffee, getting lunches, scheduling, boundaries, communication, etc. Working from home, you need to take care of most of this yourself. Although not the most difficult of tasks usually, they are definitely tedious at times.</P>
          <P>I recommend setting up a system for yourself and those you live with to make all these preparations a lot easier. Get on a specific routine that works for you and make these tasks easy to knock out at times that work best for you.</P>

          <H size={2}>4. Feeling Lonely</H>
          <P>Everyone I have come in contact with that works remotely has experienced this at one point or another. Being alone for most of your time and spending most of that time at home instigates feelings of loneliness and sometimes even depression. It happens more or less often depending on who you are, but working remote definitely requires a certain personality type to help with this.</P>
          <P>As an introvert, I enjoy being home and being alone most of the time. But, every couple of weeks these feelings creep up on me. Being able to keep myself in check with these feelings and cope with them in a healthy, productive way is something I keep as a top priority. Having people to talk to (online or in person), side projects, having hobbies to distract me, my dogs, and activities outside of my home are great coping methods for me. I recommend taking the time to figure out what works well for you in these situations and be self aware of when negative feelings start to creep up.</P>
          <P>One last touch point here, don’t feel ashamed to seek out professional help if you need it. Mental health is a very real and very important topic to be aware of. Therapy is a great way to help you overcome these feelings and set up your own methods for the future. It can be difficult to tackle negative feelings alone sometimes and if help is needed, be sure to seek out the help you need.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default ThirtyTwo;
