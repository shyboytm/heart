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

class FourtyOne extends Component {
  render() {

    const imgFourtyOne = require('../../../img/roc-volume-41-cover.png');
    const psaGradedOne = require('../../../img/postImgs/psa-graded-one.jpg')

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Great%20Design,%20Brought%20to%20You%20By%20Caring%20by%20%40fromcortes%20http%3A//blog.cortes.us/great-design-by-caring"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/great-design-by-caring"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/great-design-by-caring" />
        <Content id="41" >

          <Image imgSrc={imgFourtyOne} imgAlt="Great Design, Brought to You by Caring" />
           <div className="mb5 tl">
            <H size={1}>Great Design, Brought to You by Caring</H>
            <span className="blue pr3">Volume 41</span>
            <span className="black-50 pr3">Published June 22 2017</span>
          </div>

          <P>Welcome to Volume 41 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Along with working on Livtra, this week I also had a new idea for a project. To go along with my love for video games and the culture around gaming, I decided to start a new project where I create reviews on games, consoles, and accessories. But, the catch is that the reviews for this will have a focus on design from a hardware, user interface, and user experience stand point, bringing a unique twist to stand out from any other reviews. I’m really excited to start on it and will be streaming most of the process on my <L hrefLink="https://twitch.tv/cortesarts">Twitch</L> as usual. Be sure to come and watch when I’m working on the project and I’ll be sure to provide updates here in the coming weeks!</P>
          <H size={2}>Personal Life</H>
          <P>This week I got approval for my new apartment and am officially moving to Memphis, TN! I was able to get a 2 bedroom place this time and can’t wait to have an office that I can have solely for working to help me stay focused as well as have a space to personalize and make my own.</P>
          <P>This week I also got back from my trip and had my first shipment of PSA cards waiting for me! I actually got better grades than I thought too which is great. Most of the ones I sent this time are for my personal collection (I collect the Full Art Supporters) but I do have a couple that I’ll be putting up for sale. I have quite a few more to send off to PSA but need to wait until I move since they take about a month to get to me. Thought I’d include a picture below for those interested!</P>
          <Image imgSrc={psaGradedOne} imgAlt="PSA Cards" />

          <LineBreak />

          <P><DropCap>T</DropCap>hroughout my career as a designer I’ve tried all different aspects of the industry. Branding, illustration, animation, 3D, web design, development, and product design, just to name a few. The variable that has always stayed constant for me is caring. Caring about a lot too; users, employees, the brand, the aesthetic, use cases, colors, etc. Everything down to the smallest detail.</P>
          <P>Genuinely caring about the work I do and the people I create it for has been a paramount motivator for me since I can remember. The type of work does not matter either, there is always a way this applies. Caring about the viewers of a brand you create and how easily recognizable it becomes to them. Creating an app that changes the way someone lives. Creating an illustration that communicates better than words to help someone who struggles with reading.</P>
          <P>Not only does caring act as a motivator, but also brings clarity to design and development decisions. Caring about the experience, use cases, and accessibility of your design work sheds light on what is the best decision for all aspects of design work. With this comes research, user stories, and testing of course, all leading to the best decisions for all stakeholders.</P>
          <P>This is where great designers shine and where young (in experience, not age) designers can improve their skills quickly. Caring about not only users, but all stakeholders of a company and being able to make decisions that benefit all parties.</P>
          <P>This is what companies need and want. Someone to make conscious, careful, and (hopefully) correct decisions to make the business profitable, but also a wonderful experience for the consumers of that business. Design isn’t just aesthetics after all, it’s about how something looks, feels, communicates, and works. I genuinely feel that these are driven by a genuine care for the work you are doing and caring for the stakeholders involved.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FourtyOne;
