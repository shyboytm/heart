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

class FiftyTwo extends Component {
  render() {

    const imgFiftyTwo = require('../../../img/roc-volume-51-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=One%20Year%20of%20Writing,%20Time%20for%20Change%20by%20%40fromcortes%20http%3A//blog.cortes.us/one-year-of-weekly-writing"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/one-year-of-weekly-writing"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/one-year-of-weekly-writing" />
        <Content id="52">

          <Image imgSrc={imgFiftyTwo} imgAlt="One Year of Weekly Writing, Time for Change" />
          <div className="mb5">
            <H size={1}>One Year of Weekly Writing, Time for Change</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 52</span>
            <span className="black-50 pr3">Published Sep 8 2017</span>
          </div>

          <P><DropCap>E</DropCap>xactly 52 weeks ago I set out to release an article for this blog every week and a year later I am happy to say I did it! I did not miss one week over these past 52, I launched a native blog version of this blog, have met and interacted with many new people, and have learned a lot over the past year both personally and professionally through this blog. I’ve been doing a lot of thinking and reflecting on what this blog is and what it should become and I’m excited to talk to you about that today as well as reflect on the last year.</P>
          <H size={1}>Changes</H>
          <P>Hopefully the title didn’t scare you and make you think the writing was going to end. In fact, the exact opposite is going to happen. I’m going to start writing more! This time in a better, more planned, better curated way. I’ve been planning and working the past few weeks on a new native version of this blog to better treat the organization and separation of content while bringing a better experience to all readers.</P>
          <H size={2}>Separation of Content</H>
          <P>You may have noticed over the past few articles that I have not been including a section of updates about my life and side projects. These topics will be moving to a new Journal section on my blog. I am also introducing a another new section for Reviews on physical and digital products. I love writing about things happening in my life as well as reviewing products and games that I try, but to better serve content to people, I have decided to separate these topics out into their own sections of my blog. So, the new blog topics will be <strong>Articles, Reviews, and Journal</strong>. More on this in the next few weeks!</P>
          <H size={2}>Redesign</H>
          <P>Just like any of my projects, I am always iterating and trying to improve the reading and overall experience on my blog. With that, more design and typographical improvements will be coming to the native version of my blog. I’m also happy to say that I am working on categories filtering as well since I know that has been a concern for some readers looking for specific types of articles. Since my blog is coded by me from scratch, it’s not just a switch to turn on and off so I hope the work I’m putting into these improvements will be helpful and better than most blogs.</P>
          <H size={2}>Merging Projects</H>
          <P>If you keep up with my work, you’ll know that I was working on a new blog called Games and Grids for reviews on games and design decisions within the games. As of now, I am going to be merging this project with the upcoming version of my blog. As much as I’d like it to be it’s own project, it’s just much easier to merge this into my blog for better upkeep and separation of concerns. Since I’m limited on time for side projects, being able to write these reviews still but putting them on The Rate of Change instead of their own website is going to be better for me and also you as the reader. Trust me!</P>
          <H size={2}>Thank You</H>
          <P>I started The Rate of Change on a whim. One day I decided to start writing every week to share my experiences with others as well as provide updates and a changelog to my personal and professional life. I never thought about gaining traction on my work, finding new clients, making new friends, and learning more about the world around me. As cheesy as it sounds, it’s true. I’ve learned and grown quite a bit since I started this blog and I can’t wait for what future years of writing will hold.</P>
          <P>I’m very grateful for you that read this blog and for giving me a chance to share my experiences and opinions with you. I can’t recommend writing enough to others, you should give it a try if you haven’t yet!</P>
          <P>Cheers to another year and more after that! 🍻</P>


          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FiftyTwo;
