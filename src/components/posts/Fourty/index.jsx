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

class Fourty extends Component {
  render() {

    const imgFourty = require('../../../img/roc-volume-40-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Make%20Friends,%20Not%20Followers%20by%20%40fromcortes%20http%3A//blog.cortes.us/make-friends-not-followers"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/make-friends-not-followers"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/make-friends-not-followers" />
        <Content id="40" >

          <Image imgSrc={imgFourty} imgAlt="Make Friends, Not Followers" />
           <div className="mb5 tl measure">
            <H size={1}>Make Friends, Not Followers</H>
            <span className="blue pr3">Volume 40</span>
            <span className="black-50 pr3">Published June 15 2017</span>
          </div>

          <P>Welcome to Volume 40 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Even though I’m off from work, I’ve been spending some of my free time still putting in time to Livtra. This week I’ve been building a component system in React for use in the application, making building a lot faster and easier to do. It’s definitely a lot of thought and work at the beginning but will end up being well worth it.</P>
          <P>This week I’ve also worked on wrapping up our main dashboard views and coding the sign in/sign up pages. It’s surprisingly difficult to create login pages that feel simple but still unique so we will see where we end up on that front.</P>
          <H size={2}>Personal Life</H>
          <P>I’ve been taking off from work at Satchel Health as I’m in Florida visiting my family this weekend. It’s been great to just relax and spend time with my parents and see some of my friends from high school. Seeing my little sister all grown up (she’s 16 now!) is pretty surreal since I don’t see her too often. I feel like she grows exponentially every time I do visit.</P>

          <LineBreak />

          <P><DropCap>O</DropCap>ver the time that I’ve been in the design world learning to market myself and my work, something that I’ve noticed is the yearning for more followers. Followers on Twitter, Instagram, Dribbble, etc. seems to be a goal for a lot of younger (in skill level, not age) designers. While to an extent this is important, I think the approach most folks take is not the right approach. Followers are just looked at as a number of imaginary people to help fuel our marketing efforts.</P>
          <P>Something that I’ve come to realize that works better for me is trying to create actual connections with these “imaginary people”. Obviously this doesn’t mean becoming best friends with every single person that follows you online, but making a conscious effort to be more inviting and open to talking to those that follow you goes a long way. Showing you legitimately care for others that take the time to follow your work is important.</P>
          <P>For example, since I started streaming my work on <L hrefLink="https://twitch.tv/cortesarts">my Twitch</L>, I’ve made deeper connections with others that I had no friendship with before. People that I have never said a word to I now can consider to be good friends of mine. I know about their lives outside of work and they know about mine. We share openly and find similar interests that we can have great conversations about that surround our work and personal lives.</P>
          <P>Making followers into friends creates a deeper connection and level of support than any normal follower would ever have. Friends will support all your new work more deeply than a follower would, because they actually care about you instead of only your work. They want to see you succeed and are willing to do what they can to get you there, the same way you would do for them when you can. They share your work with others because they have a connection to the person and the work that is behind the tangible item, website, etc.</P>
          <P>Make a conscious effort to get to know others on your social media outlets. Even if that’s something small like asking a question for others to interact with or taking time to support the work of others as well. These interactions, no matter their size, are remembered and go a long way in helping yourself and helping others.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default Fourty;
