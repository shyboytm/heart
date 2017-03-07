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

class TwentyFour extends Component {
  render() {

    const imgTwentyFour = require('../../../img/roc-volume-24-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=How%20Sacrifices%20Provide%20Productivity%20by%20%40fromcortes%20http%3A//blog.cortes.us/how-sacrifices-provide-productivity"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/how-sacrifices-provide-productivity"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/how-sacrifices-provide-productivity" />
        <div id="24" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgTwentyFour} imgAlt="Why You Should Give Away What You Know" />
          <div className="mb5 tc">
            <H size={1}>Why You Should Give Away What You Know</H>
            <span className="blue pr3">Volume 24</span>
            <span className="black-50">Published Feb 23 2017</span>
          </div>

          <P>Welcome to Volume 24 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Just like last week, I’m currently working on finishing up my new native blog for my site and have put off intense Quarry work for a bit. I also started my new personal website which is taking up most of my time now as well.</P>
          <H size={2}>Personal Life</H>
          <P>I’ve been streaming a lot lately, showing my entire process for my design, illustration, and code work. From what I’ve heard, it’s been really helpful for people and we all have a great time talking about the industry and life stuff. You should come watch some time! Follow along at <L hrefLink="https://twitch.tv/cortesarts">twitch.tv/cortesarts</L>. You can also watch recordings of my previous streams at <L hrefLink="https://youtube.com/cortesarts">youtube.com/cortesarts</L>!</P>
          <P>This week I’m heading to Asheville, NC for a Satchel Health product team workation! We’re going to be working hard on building a new product for Satchel and I’m super excited. Not only will I be visiting Asheville for the first time, but I’m going to learn a ton about some new design and development skills that I haven’t ever tried before. Wish I could say more about what we are working on but you know how it is. I’ll be documenting the trip and taking pictures as much as I can, hoping to have something to share with you afterwards!</P>

          <LineBreak />

          <P><DropCap>I</DropCap> give a lot of what I know away for free. I’ve created companies based around giving away knowledge for free. I answer every person that reaches out to me with questions openly. I <L hrefLink="https://twitch.tv/cortesarts">stream the process</L> for a lot of my work and record it for others to reference. I’m transparent with my pitfalls and what I learn in this weekly blog you are reading. Besides wanting to be an overall good person and help others to the best of my abilities, I can attribute a good portion of my success to sharing my knowledge openly.</P>
          <P><strong>Disclaimer</strong>: Give away what you know. Do not try and sell yourself to know something you aren’t confidently experienced in. False information is worse than no information at all.</P>
          <H size={2}>1. Builds a Community of Trust and Support</H>
          <P>Giving away what you know will attract new fans and followers that feel they can trust in you and your expertise. They look to you for guidance on their own path to success and trust you are someone they can count on. In time, people will support all your new endeavors with open arms. If you’re starting a new project and share it with your community, they will try and support you in one way or another.</P>
          <P>In the long run, you can lean on your observations of your fans as a base for starting new ideas. Creating and selling an ebook or creating an online course targeted towards the majority of your fan base is a sure way to create income after the amount of free knowledge you’ve given. Once they trust and rely on you from the free knowledge you’ve provided, they are more likely to pay for a product or service that you’ve made, based on your track record.</P>
          <H size={2}>2. Creates Opportunities</H>
          <P>One thing I struggled with when I was first getting into the design world was getting more eyes on my work. I had just a couple friends and family that knew about my work and I always worried about actually making a living in the design world.</P>
          <P>After countless nights and hours of growing my knowledge and learning more about the industry, the more I wanted to share what I knew and what I could do with others. Slowly, I built resources and my personal brand around sharing experiences and stories with others. Over time, my follower base grew more and more, both personally and for some of the companies I created.</P>
          <P>With all this, opportunities I never thought were possible came up. I got my first professional design job at 19, I’ve been offered jobs at Weebly and Uber, I’ve done contract work with incredible companies, I’ve created a platform to launch my all my new ideas, and I even graduated college last year set up with a full-time job making twice the industry standard. I can trace each one of these and other opportunities back to giving my knowledge away for free.</P>
          <P>Companies and people recognize those who spread ideas and positivity within a community. This can create connections for you that lead to opportunities you may have never thought would exist.</P>
          <H size={2}>3. Giving Back to Your Passion</H>
          <P>Last but not least, sharing your knowledge openly is an investment back into the industry you are passionate about. No matter the industry, there can never be enough people spreading positivity and giving knowledge to those who need it. There are constantly new people arriving to your industry and just like you once did, they need the help and knowledge of those experienced in the industry to guide them on the right path to success. Starting out in an industry is tough, having the support and knowledge base of someone experienced is an incredible resource to provide to someone new.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default TwentyFour;
