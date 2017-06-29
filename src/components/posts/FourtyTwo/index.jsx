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

class FourtyTwo extends Component {
  render() {

    const imgFourtyTwo = require('../../../img/roc-volume-42-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=You%20Need%20to%20Work%20for%20Yourself%20More%20by%20%40fromcortes%20http%3A//blog.cortes.us/work-for-yourself-more"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/work-for-yourself-more"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/work-for-yourself-more" />
        <div id="42" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgFourtyTwo} imgAlt="You Need to Work for Yourself More" />
          <div className="mb5 tc">
            <H size={1}>You Need to Work for Yourself More</H>
            <span className="blue pr3">Volume 42</span>
            <span className="black-50 pr3">Published June 22 2017</span>
          </div>

          <P>Welcome to Volume 42 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>This week I’ve been working on Livtra and Grids and Games quite a bit. My main focus has been getting a CMS up and running for Games and Grids so it is much easier to maintain. I started off with Ghost, but realized I wouldn’t be able to support the type of server I needed so have moved over to Jekyll and am currently learning how to use Jekyll as I’m building it. I’m excited to show off some sneak peeks soon and will be working on a landing page to subscribe for updates and a monthly newsletter. Be on the lookout!</P>
          <H size={2}>Personal Life</H>
          <P>Not much to update life-wise, I’ve been focusing on working and starting to pack for my move in a few weeks. Reserving U-Hauls and moving help is not the most fun thing in the world. What I can say though is I’ve been looking at games to start playing to review on Games and Grids. If you have a recommendation, please let me know!</P>
          <P>This week I’ve been spending a lot of time listening to music since I’ve been working so much on projects. I know, I know, too much time in front of a screen blah blah. But, I’m really motivated right now with the projects I’m working on so I’m making an exception. Anyways, I’m listening to <L hrefLink="https://itun.es/us/M2J0jb">Big Fish Theory by Vince Staples</L>, <L hrefLink="https://itun.es/us/Ohxkkb">Grateful by DJ Khaled</L>, and <L hrefLink="https://itun.es/us/reivz">Volume Alpha by C418</L> (sound and music for Minecraft).</P>
          <P>Also, did you see that new video for Element by Kendrick Lamar? I can’t get over how incredible some of those scenes look. Check out the video <L hrefLink="https://www.youtube.com/watch?v=glaG64Ao7sM">here</L>.</P>

          <LineBreak />

          <P><DropCap>I'</DropCap>ve always believed in helping others and making things for people. It’s what I do as a designer and developer. Making products and websites that others benefit from has been on the top of my goal list for as long as I can remember. Although this still holds true, over the years I’ve learned to create a balance for what others need and what I <em>want</em> to make.</P>
          <P>Some projects I’ve worked on in the past have aligned with helping others, but I didn’t enjoy what I was creating. As a result, my work suffered. Not only was I not happy with the work, but the quality of the work suffered overall. I understand and accept that this is part of business sometimes and sacrifices need to be made, but I’ve learned to adjust the work I do outside of freelance and full-time work.</P>
          <P>An example being <L hrefLink="https://livtra.co">Livtra</L>, a new app I am working on with a friend to help people track their life and plan their goals. I’ve found a perfect balance here between making an app that helps people live a better life, but also being something I’ve always wanted myself.</P>
          <P>Having the passion there to create something I would love to use while knowing it can help other people and companies makes it not feel like work. It’s so much fun to design and develop while working and learning with my good friend <L hrefLink="https://twitter.com/aaronraff_">Aaron Raff</L>. As a result, I work harder and am more driven to create a product not only I would use, but that fits what users need. Instead of having to try and get users for us, we’re making a product that people will enjoy and <em>want</em> to use because we’re solving a problem that we have and notice others have.</P>
          <P>Another recent example of a project I wanted to make is a new one I just started called Games and Grids. Although I don’t have much to show for it yet and will be evolving it over the coming weeks, it’s something I know will be enjoyable and exciting to create and maintain. Because of my love for gaming and design, Games and Grids will be a combination of this; reviewing and discussing games, consoles, and accessories from a design and experience stand point. I’m making this for <em>myself</em>. Although I have a feeling it will be successful and others will get a lot from the website, at the core this project is for me. I love gaming and the industry behind it so creating something positive and constructive from this to help fuel my design and development passion as well only made sense.</P>
          <P>My advice is to do the same. Make something for yourself more often. Whether it’s a considerable or minuscule task, you owe it to yourself. Whether it’s a website or app like it was for me, a new hobby, or a new activity, contributing to your overall happiness and goals in your life should always be a priority.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default FourtyTwo;
