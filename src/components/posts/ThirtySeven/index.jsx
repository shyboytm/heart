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

class ThirtySeven extends Component {
  render() {

    const imgThirtySeven = require('../../../img/roc-volume-37-cover.gif');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Design%20and%20Develop%20Smaller%20by%20%40fromcortes%20http%3A//blog.cortes.us/design-and-develop-smaller"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/design-and-develop-smaller"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/design-and-develop-smaller" />
        <Content id="37" >

          <Image imgSrc={imgThirtySeven} imgAlt="Design and Develop Smaller" />
           <div className="mb5 tl">
            <H size={1}>Design and Develop Smaller</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 37</span>
            <span className="black-50 pr3">Published May 25 2017</span>
          </div>

          <P>Welcome to Volume 37 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>I launched Livtra’s new landing page this week! For now it’s just a preview of what the tool will be but there is also a sign up section to get on the list for updates and when we release a beta version ready for you to use. Be sure to check it out and sign up for updates at <L hrefLink="http://www.livtra.co">www.livtra.co</L>!</P>
          <H size={2}>Personal Life</H>
          <P>My girlfriend is back from her short vacation back in Nashville to visit family. Now that she’s on summer and doesn’t have classes, that means she’s going to start studying for the MCAT and we’re beginning to look for places in Memphis, TN for when we move. Should be an interesting couple of months since I’ll be working on Livtra and working still, but I’m excited to see what’s to come for us being back in Tennessee soon.</P>
          <P>A little on the nerdier side of things, but this week I’m beginning to send off some of my Pokémon cards to PSA for grading. For those that don’t know what that is, it’s the Professional Sports Association that grades cards based on their condition and encases them for you and documents that grade. That way you can collect cards in a certain condition and also sell them for higher prices based on their grade. I’ve been wanting to do this for a few months and finally bit the bullet on it thinking it would be a good way to build the collection I want to have and also starting to create revenue that can pay for new cards. Again, sorry for geeking out here but thought I’d share!</P>

          <LineBreak />

          <P><DropCap>O</DropCap>ne of the topics I get asked about the most is my process for design work. The process varies depending on the type of work I am doing and even whether I’m working on personal work or a freelance project. But for UI/UX work, my focus at first is to work small and then expand.</P>
          <P>For me, it is easier to start with smaller components of a UI, get those working and feeling correctly, and then move on to larger and larger components. I’ve found a smoother process building larger elements around smaller elements instead of starting large and limiting the smaller components to fit into the already existing elements.</P>
          <P>For example, if I’m designing a grid of items and a navigation around that, I wouldn’t create the navigation first. At that point, I don’t know how the items are going to fit with each other and what type of navigation or placement would work best. Sure, I could plan, take my best guess, and iterate later, but then a good chunk of my time ends up in the artboard graveyard.</P>
          <P>Another way this helps me out is planning and work load. Starting on a new project from scratch is a daunting task. It feels like countless difficult tasks are thrown at you and you’re expected to know how to juggle all of those tasks at once. Working small first helped me find comfort in taking on and creating projects with a difficult problem to solve. I have actually started to relish in taking on and solving design problems that test my skills in this area.</P>
          <P>Managing multiple elements of large projects is what I do both at my full-time job and for my side projects. As the design lead at Satchel Health, having an overall plan, process, and communication is important. Starting small and expanding to larger functions has helped pull me out of stagnant situations and approach greater responsibilities on my own.</P>
          <P>Work small and expand. Then iterate, iterate, iterate.</P>

          <P><em>Featured image animated by </em><L hrefLink="https://dribbble.com/dlvjose">@dlvjose</L></P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default ThirtySeven;
