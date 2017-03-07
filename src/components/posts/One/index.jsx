import React, { Component } from 'react';
import Helmet from "react-helmet";

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

class One extends Component {
  render() {

    const imgOne = require('../../../img/roc-volume-1-cover.png');

    return (
      <div className="cf w-100">
        <Helmet
          title="Introducing: The Rate of Change Blog"
          meta={[
                  {property: "og:title", content: "Introducing: The Rate of Change Blog"},
                  {property: "og:description", content: "I have been needing an outlet to share everything going on in my life. I feel my experiences can really help others on a personal and professional level. I need something"},
                  {property: "og:site_name", content: "The Rate of Change by Dennis Cortes"},
                  {property: "og:type", content: "article"},
                  {property: "twitter:title", content: "Introducing: The Rate of Change Blog"},
                  {property: "twitter:description", content: "I have been needing an outlet to share everything going on in my life. I feel my experiences can really help others on a personal and professional level. I need something"},
                  {property: "twitter:image:alt", content: "The Rate of Change by Dennis Cortes"},
                ]} />
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Introducing%20The%20Rate%20of%20Change%20by%20%40fromcortes%20http%3A//blog.cortes.us/the-rate-of-change"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/the-rate-of-change"
          googleLink="https://plus.google.com/share?url=https%3A//www.facebook.com/sharer/sharer.php?u=http%253A//blog.cortes.us/the-rate-of-change" />
        <div id="1" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgOne} imgAlt="Introducing: The Rate of Change Blog" />
          <div className="mb5 tc">
            <H size={1}>Introducing: The Rate of Change Blog</H>
            <span className="blue pr3">Volume 1</span>
            <span className="black-50">Published Sep 15 2016</span>
          </div>

          <P>Hey! I’m Dennis Cortés.</P>
          <P>Over the past year I’ve been working at <L hrefLink="https://satchelhealth.com/">Satchel Health</L> as a designer, learning to become a front-end developer, and finishing college. I also started <L hrefLink="http://www.usequarry.com/">Quarry</L>, a place to fill my current and upcoming side projects. Needless to say, I have learned a ton and have been working hard on myself, school, my side projects, and my job.</P>
          <P>I have been needing an outlet to share everything going on in my life. I feel my experiences can really help others on a personal and professional level. I need something I am comfortable with and I can iterate on that gives me a creative outlet to develop. That’s why today I am proud and super excited to announce a new project I created.</P>
          <H size={2}>The Need to Share</H>
          <P>As many of us can agree in this industry, the pace we work at makes it hard to keep others updated with your work. It is also easy to forget how much we are actually accomplishing. We tend to get hung up on what we are not doing instead of what we are doing. I myself have a terrible habit of doing this.</P>
          <P>People can learn so much from your story and experiences. Younger designers (skill-level, not age) are curious about what you are working on day in and day out. They want to know what you struggle with, what advice that you have for them. They want to know what things are like in your shoes.</P>
          <P>It’s hard to grow in this industry and young designers need the knowledge we have. I want to give the knowledge and resources I have now that I wish I had when I started.</P>
          <H size={2}>The Lack of Sharing</H>
          <P>Working at Satchel Health makes it extremely difficult to share what we are working on as a team there. Because of HIPAA regulations and competitors, we have to be careful with the visuals and information that we share publicly.</P>
          <P>This has been a struggle for me. I love sharing my work and solutions with others to help them learn and grow, especially because of the complex issues Satchel solves in healthcare.</P>
          <P>Because of this, a lot of aspects of my portfolio and work suffer. My portfolio is only what I <em>can</em> show, which is almost nothing currently from Satchel. I rely on side projects and freelance work to build my public portfolio, but I want to find a middle ground.</P>
          <P>Lastly, I just turned 22 last week (September 9th). People treasure memories more than anything when they get older. I want to get better at recording those thoughts and memories I have for myself as well as others to enjoy and learn from. I tried to do this previously in the form of video, but did not feel it was the right platform for my personality. I feel I express myself much better through something I have really missed, writing.</P>
          <P><strong>As a result, I have decided to start a new, weekly, personal blog called <L hrefLink="http://blog.cortes.us">The Rate of Change.</L></strong></P>
          <H size={2}>What to Expect</H>
          <ul className="list lh-copy black-60 f4 mv5">
            <li className="black i mb4">Thoughts and ideas I have relating to design and development.</li>
            <li className="black i mb4">Answers to questions people ask.</li>
            <li className="black i mb4">Advice for others centered around design and development.</li>
            <li className="black i mb4">What I work on at my full-time job (that I can share).</li>
            <li className="black i mb4">Updates and insights on side projects I have been working on.</li>
            <li className="black i mb4">Personal life updates I feel comfortable sharing.</li>
            <li className="black i mb4">Anything else I found that week or think is worth sharing.</li>
          </ul>
          <P>This blog solves a few issues I find myself having lately. It creates a platform to share my work in a way that I can not visually and becomes a compliment to my visual portfolio. This blog allows me to share personal thoughts on life and this industry in a better format than Twitter or video. It lets me have a record of my work and how I progress in design, development, and life. It helps me give advice and teach other designers what I didn’t know at their stage in their career. It will also (I hope) help me meet and connect with new, awesome people.</P>
          <P><em>The Rate of Change</em> gives me a place to develop my creative skills in a format that I’m not used to (writing). I believe it will help me grow personally and professionally. I want it to be an informal place for me to express thoughts. A place to share my hard work from professional and personal work. A place to share my knowledge on the world of design while learning about life and work along the way.</P>
          <P><em>The Rate of Change</em> name is inspired by a talk I had with a friend in relation to the rate of change phenomenon. Basically, if you want something to change in your life, make small changes that bring you closer and closer to the path you want to be on. Don’t approach the problem as one huge one. Break it into smaller, more approachable ones. I want this blog to be that for not only myself, but for you the reader.</P>
          <P>And with that, I’ll end this introductory piece here. The first formatted piece will be released next Thursday (September 22nd). Future pieces will be released every Thursday there after through my personal newsletter and here on Medium.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default One;
