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
import PostEnd from '../../PostEnd';
import Social from '../../type-elements/Social';

class Twenty extends Component {
  render() {

    const imgTwentyOne = require('../../../img/roc-volume-21-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2%20via%20%40fromcortes"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2"
          googleLink="https://plus.google.com/share?url=https%3A//www.facebook.com/sharer/sharer.php?u=https%253A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%2523.2iqcydlb2" />
        <div id="21" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgTwentyOne} imgAlt="The Key to Growing Your Social Media Presence" />
          <div className="mb5 tc">
            <H size={1}>Find Your Own Productivity Secret</H>
            <span className="blue pr3">Volume 21</span>
            <span className="black-50">Published Feb 2 2017</span>
          </div>

          <P>Welcome to Volume 21 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Because I was in Nashville for full-time work this week, I was able to meet up with Drew, the other co-founder of Quarry. It was great to see him and catch up on stuff and talk a bit about what is to come over the next few months at Quarry.</P>
          <P>Drew and I also met up with a potential new team member while I was in Nashville to discuss the possibilities of us working together and the details about that. Nothing concrete to tell yet, but I’ll keep you updated.</P>
          <H size={2}>Personal Life</H>
          <P>Earlier this week I was in Nashville, meeting with the Satchel Health crew (my full-time gig). I’ll be going back a few times this month as we ramp up to build *******. Sorry, not allowed to talk about full-time time stuff 😅.</P>
          <P>Because of the possibility of us bringing someone else onto the Quarry team, I’ve been having to step back and think about a process and a way to manage a team remotely like the one we could have. I’ve led teams before, but this one is a bit different since it is so important to me personally. It has really made me to buckle down on myself and my process and bring that ideal workflow to Quarry. It’s definitely still something I need to think on, but I’m excited for it.</P>

          <LineBreak />
          <P>If you are reading this, I’m sure you have come across countless other articles trying to give you that secret to extreme productivity. I actively avoid articles like that. Not because I found some end-all be-all way to be more productive, but because I don’t believe there are keys to productivity that work for every single person. Articles that claim to have a key to unlocking your productivity potential can leave you feeling bad about your work ethic and methods. You think that because those aren’t on your list, you are doing something wrong.</P>
          <P>Productivity should be measured on a person-by-person basis. What I mean by that is everyone has their own method, routine, sleep schedule, caffeine needs, etc. that work best for them. You shouldn’t be told what is the best way for you to be productive. Just because you prefer to go to sleep at 3am and wake up at 11am doesn’t make you an unproductive person. Not starting your day with meditation and a 5 mile run doesn’t mean you’ll be any less able to think deeply about problems.</P>
          <P>Being someone that (for some reason) people call “productive”, I can tell you right now that my schedule isn’t all that glamorous or filled with Medium article tips. For example, I play video games for around 2 hours on a normal day, I don’t like working at night, and I don’t get into any deep work until about 10am. If I paid attention to productivity articles much, I definitely could not justify what I just told you (At least the video games part, right?).</P>
          <P>But, I get quite a bit done. I run my own businesses, I work full-time, I contract for many companies at a time, but I have time to spend with my girlfriend, my dogs, my friends and family. I found what works for me and when and I created my schedule around that.</P>
          <P>You are more than capable to be productive as well, <em>don’t let someone tell you otherwise</em>. The key is observing and catching on to what works best for you. Figure out what times you are most productive and fill those times with important work. Find what times you are least productive, fill those times with less thought-driven work. Make your own off-time to spend doing things you enjoy and spending time with people that bring value to your life.</P>
          <P>Tips that some articles provide can be a great starting point and an interesting read, don’t get me wrong. But, I recommend acting as a filter with articles like these; pull out what works for you, and don’t dwell on the rest. No one need extra pressure on them to be more productive, we’re all trying to figure these things out. So relax, sit back, and observe what works for you, not anyone else.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default Twenty;
