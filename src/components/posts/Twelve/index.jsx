import React, { Component } from 'react';

import Content from '../../Content';
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

class Twelve extends Component {
  render() {

    const imgTwelve = require('../../../img/roc-volume-12-cover.png');
    const imgBlackIce = require('../../../img/postImgs/black-ice-fieldy.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Less%20Perfection%20and%20More%20Iteration%20by%20%40fromcortes%20http%3A//blog.cortes.us/more-iteration-less-perfection"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/more-iteration-less-perfection"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/more-iteration-less-perfection" />
        <Content id="12" >

          <Image imgSrc={imgTwelve} imgAlt="Less Perfection and More Iteration" />
           <div className="mb5 tl">
            <H size={1}>Less Perfection and More Iteration</H>
            <span className="blue pr3">Volume 12</span>
            <span className="black-50">Published Dec 1 2016</span>
          </div>

          <P>Welcome to Volume 12 of The Rate of Change, hope your having a great week. As I was working on some new updates to my side projects, I thought about how great it is that we can iterate on MVP projects. Getting caught up in perfection is frustrating so I’m here to help you create better and more confidently.</P>
          <P>As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Field Notes unveiled their newest COLORS edition Black Ice last week! With every release, I create a new illustration for Fieldy to let people rock the new edition as wallpaper on their phone and desktops. If you’re interested, feel free to download them at <L hrefLink="http://fieldy.co">www.fieldy.co</L></P>
          <Image imgSrc={imgBlackIce} imgAlt="Black Ice Field Notes" />
          <P>I also finished Fieldy 2.0! A brand new website and experience for Fieldy with a ton of UX improvements based on user feedback and overall critique. Be sure to check it out at <L hrefLink="http://fieldy.co">www.fieldy.co</L></P>
          <H size={2}>Personal Life</H>
          <P>After a bit of a hiatus, I started reading about minimalism again this week. If you didn’t know, I have been practicing minimalism in my life for a few years now but have felt myself slip out of focus for the past few months. After Cyber Monday and Black Friday shopping, I realized how much I was slipping (oops haha). Still very much brushing up but hoping to get back into it and make a change soon</P>
          <P>As weird as it feels to say it, I started a (almost) daily journal this week. I’ve been reading more and more about the benefits of writing down thoughts, ideas, memories, and events more so I finally caved in to starting this new habit. I think it will be really beneficial to my personal and professional life. It’s worth looking into if you haven’t yet!</P>

          <LineBreak />

          <P><DropCap>N</DropCap>othing you make will ever be perfect. Things change; your style, company goals, target market, trends, etc. Whatever you create is very unlikely to completely withstand the tests of time no matter how much effort and thought you put into it.</P>
          <P>But, this is the beauty of iteration. It’s what keeps us motivated and keeps thoughts stirring in our mind. Ways to improve, develop, and grow as people and companies alike. Iteration allows minimum-viable-products to be the go-to option for ideas. Iteration inspires confidence and acceptance during the possibility of failure.</P>
          <P>Take large corporation updates for example. Uber just <L hrefLink="http://www.theverge.com/2016/11/2/13490142/uber-app-redesign-streamline-shortcut-snapchat-filter">changed their app</L> a few weeks ago and <L hrefLink="https://www.behance.net/gallery/43759199/Uber-Visual-Identity-Redesign">updated their brand</L> earlier this year. Nothing was inherently wrong with their brand or application, it got the job done and made Uber a $60B dollar company. But, they found a way to make their app and branding even better. A better system for their brand and a universal design language that let’s them expand in other countries easier. An app that puts where you’re going instead of where you are at the forefront of the experience.</P>
          <P>Small projects/companies benefit from iteration as well. Iteration happens to be my favorite part of developing <L hrefLink="http://www.usequarry.com/">my companies</L>. Taking a project, recognizing failures and places for improvement, iterating on those issues, and then releasing an even better product is one of the best feelings.</P>
          <P>Smaller companies are much easier to act upon. Less people to get on board and shift towards, less meetings, less emails, and less push back on the changes in question. This is one of the advantages of being and/or staying small. Early on you can improve quickly and see the best fit direction to creating a successful business. If done correctly, these stages can create the foundation for an incredibly successful idea.</P>
          <P><strong>The core idea of your project is what is important.</strong> Focus on staying true to the roots, morals, and goals of your ideas. Iterate on top of this foundation based on feedback, observations, market shifts, and user needs. The process and foundation of your projects are what make or break your success. Everything around these ideologies can be iterated on and improved, but the direction in which they go are dependent on the foundation of what you have established.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default Twelve;
