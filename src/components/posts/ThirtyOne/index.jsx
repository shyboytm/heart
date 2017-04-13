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

class ThirtyOne extends Component {
  render() {

    const imgThirtyOne = require('../../../img/roc-volume-31-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Advantages%20of%20Working%20Remote%20by%20%40fromcortes%20http%3A//blog.cortes.us/advantages-of-working-remote"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/advantages-of-working-remote"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/advantages-of-working-remote" />
        <div id="30" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgThirtyOne} imgAlt="Advantages of Working Remote" />
          <div className="mb5 tc">
            <H size={1}>Advantages of Working Remote</H>
            <span className="blue pr3">Volume 31</span>
            <span className="black-50">Published Apr 12 2017</span>
          </div>

          <P>Welcome to Volume 31 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>I started a huge new project this week and I have good news, I’m going to be making it entirely with you! I’m going to do this by streaming most of the work I do on this product on my <L hrefLink="www.twitch.tv/cortesarts">Twitch</L> as well as uploading the streams to <L hrefLink="www.youtube.com/cortesarts">YouTube</L> afterwards for people to view and reference. This is the biggest leap in transparency I’ve ever done, I’d love to have your support along the way!</P>
          <H size={2}>Personal Life</H>
          <P>I’ve been spending a lot of time lately trying to learn to draw. I’ve gotten really into Pokemon again over the past few months and something I’ve always admired is the illustration style of both official and unofficial art that comes out of the Otaku subculture. As a result, I’m obsessively collecting constant inspiration from this work and hope to maybe one day feel comfortable enough to show some of the work. I’ve been giving some sneak peaks in my Instagram stories if you are interested though!</P>

          <LineBreak />

          <P><DropCap>T</DropCap>his week, I wanted to write another article for those interested in working remote and a bit more about the life of working remote. Of course, every experience will be different depending on the person and the company they work at, but I thought I’d give some general positive points I’ve experienced about not working in an office.</P>
          <H size={2}>1. Less Distractions</H>
          <P>A considerable advantage of not working at an office is less distractions from your work place. When I do work at the Satchel Health HQ, I feel incredibly distracted from my work. Coworkers speaking around me or others tapping me on the shoulder for a question seem to be the most common parts of my day at an office.</P>
          <P>While working at home or a coffee shop have their own distractions as well, I feel much more in control of my surroundings and my distractions. I can change my seat in a coffee shop or even change shops. At home I can control what I have in my view to minimize distractions. While remote, the main way coworkers contact me is through Slack, in which I can take an extra few minutes to wrap up what I’m working on before acknowledging someone’s question.</P>

          <H size={2}>2. Less Travel</H>
          <P>Not having a commute most mornings to an office has been incredible for me. I have take time to go to the gym often, I can make my own coffee how I like it, I can make a healthy breakfast, all because of that extra time I am saving not having to worry about a commute. If I ever do need a change of scenery, walking to the coffee shop on my block or driving a mile or two is a lot easier than most commute times.</P>

          <H size={2}>3. Less Stress</H>
          <P>Not being present in an office setting has helped me reduce frequency of stress for me. Any time something that causes stress happens in the office, I do not have to feel the stress first hand most of the time. News and deadlines are usually communicated in a different way when you work remote and are much easier to filter and think about.</P>
          <P>I also don’t feel stress from a commute. Having to rush out the door or run errands quickly during commute before something closes is almost non-existent for me. If I need to run an errand, I can just take a few minutes to run that errand and not sacrifice any work time getting in and out of the office. For example, I can go to the post office and when my package is dropped off, I just head next door to that little coffee shop I like. How long was I? Oh, only 10 minutes!</P>

          <H size={2}>4. More Time for Yourself</H>
          <P>In accordance with less commute time and less distractions, I get a lot more time for myself to work on things I want. Right when work is over, instead of getting in my car and heading home, I can start right where I am to work on things important to me or spend time with my girlfriend and our dogs. Lately, I’ve been learning to draw and paint in my personal time, something I’ve wanted to learn forever but never had the time for until recently. I cannot stress how helpful extra time for myself has been for my overall happiness in life.</P>

          <H size={2}>5. Choose Your Environment</H>
          <P>One of my favorite things about working remote is the fact that I can make my work environment exactly what I want it to be whenever I want. I can change up my desk, work on my couch, go to a place to eat and work, even go to the park and work if I really wanted. This is crucial for me as I’m admittedly pretty picky about my surroundings when I work. Having this control makes my OCD happy!</P>
          <P>That is a high-level look at some of the reasons I think remote work is effective and can suit certain lifestyles. Next week, I’m going to write about the disadvantages of working remote to give both sides of the story and maybe give some better perspective for those interested about remote work. Be sure to follow along and subscribe to my newsletter so you don’t miss out!</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default ThirtyOne;
