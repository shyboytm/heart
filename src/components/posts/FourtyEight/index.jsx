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

class FourtyEight extends Component {
  render() {

    const imgFourtyEight = require('../../../img/roc-volume-48-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Your%20Workflow%20is%20Not%20Important%20by%20%40fromcortes%20http%3A//blog.cortes.us/your-workflow-is-not-important"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/your-workflow-is-not-important"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/your-workflow-is-not-important" />
        <Content id="48">

          <Image imgSrc={imgFourtyEight} imgAlt="Your Workflow is Not Important" />
          <div className="mb5">
            <H size={1}>Your Workflow is Not Important</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 48</span>
            <span className="black-50 pr3">Published Aug 10 2017</span>
          </div>

          <P>Welcome to Volume 48 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>If you are reading this on my website, you probably noticed my blog has a brand new design! I’m very pleased to launch this and put a lot of focus on an easier read with better typography, layout, and load times. I also made some small improvements such as better use of color throughout and even remade The Rate of Change’s logo in code in a brand new header and footer. Hope you enjoy it and let me know what you think!</P>
          <H size={2}>Personal Life</H>
          <P>This week I had an interview with one of my top choices for a new full-time opportunity. While waiting to hear back on next steps, I have been making quite a bit of progress on personal projects.</P>
          <P>I’ve reworked my idea for <L hrefLink="https://gamesandgrids.com">Games and Grids</L> and am able to start writing reviews finally. Hoping to launch with 4 reviews written for you to read. 1 of them is done, 3 to go!</P>
          <P>Like I mentioned, I wrapped up the new version of my blog which you are hopefully reading this article on!</P>
          <P>I also started and finished a new little project over the weekend that I am launching next week. Probably the quickest I have made a project, stay tuned!</P>

          <LineBreak />

          <P><DropCap>E</DropCap>arly in my career up until today sometimes, I’ve loved learning about how other people work. Sure, this finished piece looks and works great, but <em>how</em> did they get to this point? What tools did they use? Will I be as good if I use the same tools?</P>
          <P>Over time, I’ve realized none of this matters. The more I learned about my craft and the way that I work best, the more I discovered about how I work best. I find paying too much attention to the work of others actually hinders my ability to make my best work and leaves me unsatisfied with what I create.</P>
          <P>Funny enough, over time I have realized I do not even have a specific workflow that is best for me. Adaptability is my strong suit and allows me to work on what is best needed for the situation. Sometimes I will start off a project with writing and wireframing. Other times I may jump straight into code if I have a good enough grasp on what the project goals are. Design tools have become more of a conceptual and exploration tool for me, while code is my go to for actually building out a refined version of a product. Seeing how designs will look exactly in design tools has never been something I could figure out, so working and iterating in code makes much more sense to me.</P>
          <P>What I am trying to say is not to stress too much about the process in which you work. Over time, you find certain patterns that work for you and that process is constantly iterated on. Being open to adapting to the workflow of teams or people you work with is also a determining factor. Just know that your workflow isn’t directly proportional to your quality of work. Your workflow will never be set in stone and will always be a place to learn and grow.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FourtyEight;
