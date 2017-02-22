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

class One extends Component {
  render() {

    const imgOne = require('../../../img/roc-volume-1-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2%20via%20%40fromcortes"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2"
          googleLink="https://plus.google.com/share?url=https%3A//www.facebook.com/sharer/sharer.php?u=https%253A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%2523.2iqcydlb2" />
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
          <H size={1}>As a result, I have decided to start a new, weekly, personal blog called <L hrefLink="http://blog.cortes.us">The Rate of Change.</L></H>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default One;
