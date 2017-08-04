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

class Nineteen extends Component {
  render() {

    const imgNineteen = require('../../../img/roc-volume-19-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=How%20to%20Come%20Up%20with%20Side%20Project%20Ideas%20by%20%40fromcortes%20http%3A//blog.cortes.us/how-come-up-side-project-ideas"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/how-come-up-side-project-ideas"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/how-come-up-side-project-ideas" />
        <Content id="19" >

          <Image imgSrc={imgNineteen} imgAlt="How to Come Up with Side Project Ideas" />
          <div className="mb5 tc">
            <H size={1}>How to Come Up with Side Project Ideas</H>
            <span className="blue pr3">Volume 19</span>
            <span className="black-50">Published Jan 19 2017</span>
          </div>

          <P>Welcome to Volume 19 of The Rate of Change. Can’t believe it’s been 20 weeks in a row that I’ve written to you! I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Took a break this week from Quarry stuff since I’m in California!</P>
          <H size={2}>Personal Life</H>
          <P>Been in California this week (Orange County) enjoying the weather here and getting some work done when I can.</P>
          <P>Slowly but surely I have also been working on building my native blog site with a better and more controlled reading experience with my personal taste for simplicity and design elements presenting my writing. I’m building it in React in a way I’ve never worked before, maybe I’ll write a little something about how I’m doing it if there is enough interest.</P>
          <P>I released a new song this week! Definitely my best and most favorite so far. The song samples Me and Your Mama by Childish Gambino and I had a ton of fun making it. Please give it a listen on Soundcloud here:</P>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/302986306&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

          <LineBreak />

          <P><DropCap>P</DropCap>rojects outside of your full-time work is important, no matter what stage of life you are in. As I’ve mentioned in a previous article, side projects help build your skill set, can bring in extra income, and are a creative outlet. But, to create a side project, you first need an idea, right? I’ve made quite a few side projects that have helped and inspired others, all from using certain techniques to come up with their ideas.</P>
          <P>One of the questions I get the most is how I am able to come up with these ideas. Forget actually building them, because without the initial idea there is of course nothing to build. So, I want to give away what I find most helpful when trying to come up with ideas.</P>

          <H size={2}>Tip 1: Observe</H>
          <P>Probably the most important tip I can give you. Keeping an eye out for what you can make life easier is a great way to find project ideas. Observe aspects of your life and the lives of others to find pain points that need relief. For example, I noticed a lot of designers and amateur developers I interact with have a common struggle of finding where they need to go to learn/get better at code. As a result, I am working on building a project that will make these steps a lot easier to tackle.</P>
          <P>Another example is Shop Drones Co, a project I made with a friend of mine at Quarry. We noticed there was nowhere online that curated the selection of drones and the experience around that purchase. So, we made Shop Drones Co. as an attempt to patch that hole we observed in the consumer market.</P>
          <P>Be observant with where you can remove pain points from the lives of others, and watch for a common trend of that need. If it persists and is common, it’s probably something worth looking into. Keep in mind the people you are observing though, it may be a very niche amount of people. This can be a great thing, but keep that in mind when planning and building the project you come up with.</P>

          <H size={2}>Tip 1: Feed off of Your Interests</H>
          <P>A great starting point for project ideas is starting with yourself. What are you interested in? What do you wish existed? How can you teach others from your past experiences? What can you make to make your life easier? A lot of the time I have found others to share my interests and I’ve been able to build something from that.</P>
          <P>An example of this is my side project Fieldy. I love collecting Field Notes books and found a lot of people did as well. So, I made something that I wish existed and guess what? A lot of people enjoyed it as well and continue to use it.</P>

          <H size={2}>Tip 3: Write Down Every Idea</H>
          <P>Yes, <em>every single one</em>. No matter how dumb, small, or unbuildable it may seem. Even if the idea has been done before in some way, it seems too generic, or even seems pointless. Ideas can be mixed, matched, and combined until you find that perfect mixture. If you have a small idea and don’t write it down, I can guarantee you will forget it and it will be gone forever. Instead, take a couple seconds and write it down. You’ll thank me later.</P>
          <P>A lot of ideas I have had have built off of other ideas that I have written down. I keep a digital .txt file where I write down every inkling of an idea that I can revisit, revise, and expand upon as time goes on. When I have the time, I can open up that list and pick and choose what is the best investment of my time and what interests me the most. Because I took the time to write down those ideas, I can pick and choose what I’d like to work on when the time presents itself.</P>

          <H size={2}>Tip 4: Find Faults in Other Projects</H>
          <P>This is more of a passive action because it should never be your default approach, but finding places where other projects fall short is another way to find project ideas. There are some projects and businesses I’ve seen that have the core idea down, but the execution could use some work. Whether that be in terms of design, customer experience, features offered, etc.</P>
          <P>Again, I’d advise caution with this method. Being honest and respectful with your work is crucial. The same way you would never want someone to rip off your idea, don’t do that to someone else. Make sure your idea is different enough and brings actual value to the idea, not just an attempt at benefitting off of someone else’s hard work.</P>

          <H size={2}>Tip 5: Filter Your Ideas</H>
          <P>If you are a creative person, chances are you think of ideas, but don’t have the resources to follow through on a project. Whether that be time, money, skill set, etc. But don’t worry, that is completely normal (happens to me as well quite often). The key is to problem solve around these limitations. Find someone to help you, invest some money into the idea, set aside time to work on your idea, learn a new skill, adjust your idea to accommodate limitations, etc.</P>
          <P>Feeling stuck during this stage is normal. Stay motivated and open to change, filter the ideas you have written down to find which fits your situation best.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default Nineteen;
