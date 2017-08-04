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

class Nine extends Component {
  render() {

    const imgNine = require('../../../img/roc-volume-9-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Why%20Vacations%20are%20Important%20by%20%40fromcortes%20http%3A//blog.cortes.us/why-vacations-are-important"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/why-vacations-are-important"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/why-vacations-are-important" />
        <Content id="9" >

          <Image imgSrc={imgNine} imgAlt="Why Vacations are Important" />
           <div className="mb5 tl measure">
            <H size={1}>Why Vacations are Important</H>
            <span className="blue pr3">Volume 9</span>
            <span className="black-50">Published Nov 10 2016</span>
          </div>

          <P>Welcome to Volume 9 of The Rate of Change, hope your having a great week. I’m so glad to be back home finally and back to my normal schedule. I had an amazing time in Florida and SF but I feel so refreshed and happy to be back.</P>
          <P><strong>Great news:</strong> I was featured on my friend’s creative talk show, called ta–lk, where I talk a bit about my story of becoming a designer and go into detail about my current work life. I talk about my projects with Quarry and what I work on at Satchel Health, as well as some general beliefs on the design world. <L hrefLink="https://www.youtube.com/watch?v=8vTTJ-W-Axc">Check out the episode here</L> 🎉</P>
          <P>As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Because I was on vacation, there isn’t much to update you on here. Drew and I are still trucking away and designing and building Quarry’s new site.</P>
          <P>I’ve been focusing on wrapping up the latest project for Quarry and have had to spend a lot of time researching and figuring out things in a field I am not 100% familiar with. Because of that, I’m taking my time and being very cautious about my approach to it. Anyways, I’ll keep you updated on that in the next couple weeks.</P>
          <H size={2}>Personal Life</H>
          <P>Just got back this week from an awesome 2 week vacation. I feel so much more refreshed and ready to get back into work as you’ll read in this article.</P>
          <P>I took a couple pictures on my trip that I am going to share in a separate article on Medium and hopefully Exposure. These photos will also be available for free on <L hrefLink="https://unsplash.com/@cortes">my Unsplash</L> over the next few days if you’re interested.</P>
          <P>After not taking on projects for a while, this week I decided to take on some new freelance gigs and am excited to see how these projects go. I’ll be sure to keep you updated and will be showing some progress over on my <L hrefLink="https://dribbble.com/fromcortes">Dribbble</L>.</P>
          <P>This week’s been pretty crazy with the election going on. No matter your candidate choice, I hope everyone stays safe and continues to spread love, positivity, and empathy throughout their lives. Let’s push towards unity in this time of what feels like division.</P>

          <LineBreak />

          <P><DropCap>I</DropCap> just got back from a 2 week vacation a couple days ago. As you may know, this was my first vacation since going full-time and I was visiting some family in Florida, then spent a couple days in San Francisco. The very next day I got right back into my full-time work and I noticed something. I felt noticeably more motivated and inspired than I did before I left. It may seem obvious since I came back from a vacation, but this time was different. I thought about it and I realized why.</P>
          <P>Since I can remember, whenever I would take a vacation to visit family or go somewhere fun, I always spent a good chunk of the time there catching up on school or work tasks. As a full-time designer and student at the same time, I was always having to use my time wisely to stay up to par on what I had going on.</P>
          <P>This time, I had a <em>real</em> vacation. I worked a little bit on a couple personal projects while visiting family, but towards the end of the vacation, I <em>really</em> took the time to reset and reflect on my myself, my work, and my life.</P>
          <P>I was intentional about absorbing everything I saw around me and listening to my responses to what I saw and felt. I took time to pursue hobbies I usually don’t have the time for like photography and reading. I met with new friends, ate great food, caught up on TV shows, climbed the hills of San Francisco, and walked for miles just taking everything in.</P>
          <P>The experiences were refreshing. I had a new and better perspective on topics in my personal and professional life. I came back feeling reset and refreshed. These past two weeks really gave me a better attitude towards taking breaks when needed and realizing the potential for improvement.</P>
          <P>My point is, I think a large amount of people get way too caught up in their work, myself included. We think working non-stop will get us some sort of appraisal. Periods of rest and reflection are just as important as periods of work, and we shouldn’t have one without the other. Each should be approached with the same amount of passion to bring out the best in each.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default Nine;
