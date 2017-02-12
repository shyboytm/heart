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

class Seventeen extends Component {
  render() {

    const imgSeventeen = require('../../../img/roc-volume-17-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2%20via%20%40fromcortes"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2"
          googleLink="https://plus.google.com/share?url=https%3A//www.facebook.com/sharer/sharer.php?u=https%253A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%2523.2iqcydlb2" />
        <div id="17" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgSeventeen} imgAlt="Tips for Working Remote (Part 1)" />
          <div className="mb5 tc">
            <H size={1}>How to Come Up with Side Project Ideas</H>
            <span className="blue pr3">Volume 17</span>
            <span className="black-50">Published Jan 5 2017</span>
          </div>

          <P>Welcome to Volume 17 of The Rate of Change. I hope you had an amazing new year and best of luck to you in 2017! As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>I’ve been working on that project about code that I hinted about last week slowly but surely. I gave a little sneak peak on my Instagram stories earlier this week, so be sure to follow me on Instagram if you haven’t yet if you’re interested in that. I’m also thinking about doing Live Q&As there sometime soon!</P>
          <P>Besides that, things have been pretty quiet. Drew and I are really focusing on expanding our knowledge on code to help us build some even more awesome things in the future that are a bit more complex than our current projects. 2017 is going to be a great year for us and I can’t wait for what is to come!</P>
          <H size={2}>Personal Life</H>
          <P>I’m on my last week of being without my girlfriend, she’ll be coming back to Saint Louis next week and I can’t wait for her to be back. The main reason I say that is because I’ve just buried myself in work since she’s been gone, she always helps me remember to take breaks. It’s especially important this week because I’ve been feeling pretty burnt out over the past couple of days.</P>
          <P>Besides that, I made a fun little site for keeping track of my teams and captures in the new Pokémon games. I’ve been living in nostalgia city the past couple of weeks with the newest games so I thought I’d practice some code tactics by building a small site for fun. <L hrefLink="http://pokem.cortes.us">You can check it out here →</L></P>
          <P>Proud to announce that I am joining the team over at Design Inc. as their Content Strategist! The team there came across the work I’ve done with Calligritype and Illustree and invited me to work with them to help build their community and digital reach. I’ve loved and admired their product from afar so it’s surreal to be working with them now. Don’t worry, I’m still working full-time at Satchel, this is more of something I work on during my nights and weekends. Excited for what’s to come!</P>

          <LineBreak />

          <P><DropCap>I</DropCap>’ve been working remote for quite a while now. Whenever I tell people I work remote, they are always curious about how I can get stuff done and my recommended practices. So if you work remote/work from home or are wanting to, this article is for you. Enjoy!</P>

          <H size={2}>1. Have a Routine</H>
          <P>Easily the most important tip I can give you is setting and maintaining a routine. Having a process you can stick to that your body can get used to makes your morning routine much easier. This will also help you separate your work and non-work life even while you are at home. Your body will get used to the time and actions associated with each other after some time, just be sure to stick with something that’s reasonable for you and your lifestyle.</P>
          <P>Personally, I like to wake up at the same time each morning, go to the gym, take a shower, take my dogs out, make breakfast during my morning stand up, then make coffee and get to my desk ready to start the day. I always take a one hour (timed) lunch break where I make lunch (obviously) and watch something on YouTube or Netflix to give myself a break to help reset for the afternoon.</P>

          <H size={2}>2. Dress for Success</H>
          <P>Although it may seem minor, this is another big part of my routine. Of course you don’t have to wear a suit or something but I prefer to wear something dressy casual. It helps you get into a routine easier. You will feel clean and confident. You will feel like you’re in work mode, as opposed to just working in your pajamas. Trust me, that won’t go very well. You will be prepared for meetings. No more rushing to not look like you just woke up.</P>

          <H size={2}>3. Have a Dedicated Workspace</H>
          <P>Separating the place you work and the place you live is important. If they bleed into one another, distractions can creep up on you easily. A few typical examples of thoughts you’ll have:</P>
          <ul className="list lh-copy black-60 f4">
            <li className="black i mb4">I should really clean those dishes 🍽</li>
            <li className="black i mb4">I can lay down for just a few minutes 🛏💤</li>
            <li className="black i mb4">I can have Netflix on the TV in the background, that won’t distract me 📺</li>
          </ul>
          <P>Invest some money in getting yourself a great desk, a comfortable chair, maybe even a monitor or laptop stand. Make your workspace inspiring and comfortable for how you work best. The better you set yourself up for success, the less likely you are to get distracted.</P>

          <H size={2}>3. Limit Possible Distractions</H>
          <P>To go with #3, you need to be conscious about limiting the amount of possible distractions around you both physically and digitally. Here are a couple suggestions:</P>
          <ul className="list lh-copy black-60 f4">
            <li className="black i mb4">Close the door to the room you are in while working.</li>
            <li className="black i mb4">Turn off all notifications on your phone and computer.</li>
            <li className="black i mb4">Block distracting websites you have a habit of going on.</li>
            <li className="black i mb4">Don’t have any unnecessary screens nearby (tablet, phone, TV, etc.).</li>
            <li className="black i mb4">Communicate your working times to others you live with.</li>
            <li className="black i mb4">Filter Slack and Email notifications for only crucial ones.</li>
          </ul>

          <H size={2}>5. Over Communicate and Ask Questions</H>
          <P>Having text as the main for of communication with others can make it difficult to express yourself well if you are not careful. It is very difficult for others to sense your tone of voice through text based communication. Be sure to over communicate your thoughts, your process, your concerns, and your intentions to others early and often.</P>
          <P>On the other spectrum of that, be sure to ask questions when you have them. If you do not fully understand something or forget was has been previously discussed, ask! There is nothing wrong with asking questions and double checking information. Your coworkers would (or at least should) be happy to clarify questions or concerns.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default Seventeen;
