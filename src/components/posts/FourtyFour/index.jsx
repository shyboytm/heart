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

class FourtyFour extends Component {
  render() {

    const imgFourtyFour = require('../../../img/roc-volume-44-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=How%20to%20Make%20Passive%20Social%20Media%20Traction%20by%20%40fromcortes%20http%3A//blog.cortes.us/how-to-make-passive-social-media-traction"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/how-to-make-passive-social-media-traction"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/how-to-make-passive-social-media-traction" />
        <Content id="44" >

          <Image imgSrc={imgFourtyFour} imgAlt="How to Make Passive Social Media Traction" />
          <div className="mb5 tc">
            <H size={1}>How to Make Passive Social Media Traction</H>
            <span className="blue pr3">Volume 44</span>
            <span className="black-50 pr3">Published July 13 2017</span>
          </div>

          <P>Welcome to Volume 44 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>This week I’ve still been working on <L hrefLink="https://livtra.co">Livtra</L> and <L hrefLink="https://gamesandgrids.com">Games and Grids</L>. The overall look and feel and basic dashboard for Livtra is in place currently and now Aaron and I are working on implementing features and improving the experience of the app little by little. We’re still hoping for a beta launch at the end of September so make sure you’re signed up for updates!</P>
          <P>Nothing too crazy, but I shared a sneak peek of part of Livtra’s dashboard on Twitter this week <L hrefLink="https://twitter.com/fromcortes/status/885557028546117634">here</L> if you are interested.</P>
          <H size={2}>Personal Life</H>
          <P>I have been pretty busy in my personal life this week. My girlfriend moved this week before I do at the end of the month so it feels a bit weird to be by myself for the time being. Since I was helping her get packed, I was a little MIA overall and hence why this article is a day late. I am excited to be productive while also making time for video games, but it’s definitely different since her and I are usually together all the time.</P>
          <P>I know I wrote about this last week, but I’m still amazed at how great Zelda Breath of the Wild is. Never have I put 90+ hours into a video game and still felt as excited and determined as I do every time I start up that game. I still find so many great aspects of story, adventure, discovery, and characters and I’ve only completed ~30% of the game. You need to do yourself a favor and play it at some point in your life.</P>

          <LineBreak />

          <P><DropCap>If</DropCap>you are reading this, I can only assume you used social media often. Although the tactics to growing a social media account are relatively well known, you may find that maintaining social media accounts is the real challenge. While this article is by no means the ultimate guide for this topic, I definitely think so of my tips that I’ve used for years may come in handy.</P>
          <P>The main goal to keep in mind is automation. You are much better off spending an hour or two once a week creating posts than trying to find time throughout your busy day creating posts for your accounts. My recommendation is getting a service like <L hrefLink="https://hootsuite.com">Hootsuite</L> or <L hrefLink="https://buffer.com">Buffer</L> to schedule posts for you. This way, you can spend a bit of time once a week bulk creating and scheduling posts that will automatically go live throughout your week.</P>
          <P>Services like Tumblr also have great features like queuing posts for you. You can then set a span of time in which Tumblr will post a certain amount of items in your queue. It’s quite a handy feature to have if you spend a couple minutes on Tumblr a day and want to keep your posts active and consistent.</P>
          <P>Now I am sure you can see the elephant in the room, Instagram. Unfortunately, Instagram does not allow any access to posting to third party applications (probably to avoid spam). This means that services like the ones previously mentioned do not have a way to schedule and automate posts for you. However, there are some tips I have learned to make this process much easier. My tips are to figure out the best times to post for your account (if you have analytics available) and also setting up a template post for yourself. Have a document on your phone that you can easily copy and paste that has the template for your caption as well as any hashtags you use by default on posts. This has helped me quite a bit with posting easier and more often on company accounts.</P>
          <P>I have been able to grow multiple accounts exponentially with the minimal time and effort with some of these tactics. There are definitely other aspects to ensure growth, but this article should help take care of making the act a lot more passive than it would be normally.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FourtyFour;
