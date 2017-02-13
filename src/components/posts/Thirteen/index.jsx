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

class Thirteen extends Component {
  render() {

    const imgThirteen       = require('../../../img/roc-volume-13-cover.png');
    const imgBlogSneakPeek  = require('../../../img/postImgs/native-blog-post-sneak-peek.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2%20via%20%40fromcortes"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2"
          googleLink="https://plus.google.com/share?url=https%3A//www.facebook.com/sharer/sharer.php?u=https%253A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%2523.2iqcydlb2" />
        <div id="13" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgThirteen} imgAlt="People are More Than Connections" />
          <div className="mb5 tc">
            <H size={1}>People are More Than Connections</H>
            <span className="blue pr3">Volume 13</span>
            <span className="black-50">Published Dec 8 2016</span>
          </div>

          <P>Welcome to Volume 13 of The Rate of Change, hope your having a great week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>For total honesty and complete transparency, most things have taken a halt this week at Quarry. I’ve been putting off getting into creating marketing materials for launching our new product. I’m worried about not doing it correctly or good enough. It’s funny because I’ve written posts about getting over this but find myself stuck. If you have any words of motivation I’d love to hear them :).</P>
          <H size={2}>Personal Life</H>
          <P>The past week I’ve been focusing on two things:</P>
          <ol className="lh-copy black-70 f4">
            <li>I’ve been working on slowly migrating my blog posts onto a native blog on my website for a more personalized experience, a way to drive more traffic to my site (meeting new people, getting more freelance work, etc.), and just because I want to personalize the typography. Not that Medium doesn’t do an amazing job at this, but I wanted something a little different. Here’s a sneak peak at part of a post’s design!</li>
            <Image imgSrc={imgBlogSneakPeek} imgAlt="Native Blog Post Sneak Peek" />
            <li>As a huge nerd, I’ve been playing every Pokémon game since I got the Red version when I was 4 years old. So, naturally, I’ve been playing the newest Pokémon (I got Sun) and beat the main story besides the Elite 4. My team just isn’t really up to par and I decided to start over to create a better team. I know this all sounds super nerdy but I love video games so don’t judge haha.</li>
          </ol>

          <LineBreak />

          <P><DropCap>Y</DropCap>ou constantly hear that connections are everything. The more people you know, the more well-connected you are and the more valuable you are for others to be connected to. The constant dread of obnoxious “I want connect with you on LinkedIn” emails are always harboring your inbox. You want to have more followers on Twitter and Instagram. But, now you have all these connections at your disposal. Have you ever taken a second to reach out and learn about the people underneath those “connections”?</P>
          <P>People have their own opinions, experiences, and hobbies that we can all learn from. It’s hard to get a grip on certain aspects of people’s lives just by following them on Instagram and Twitter. Real connections with people require an active and sincere approach. People love talking about things they are passionate about that drive them in life. That could be work, a hobby, family, friends, etc. Finding common interests with people builds a foundation to find new friends and learn new things.</P>
          <P>This doesn’t need to be something super formal either. You don’t have to invite people out to coffee or dinner, getting to know someone online is a plausible solution as well. For example, say you notice someone you follow posted a photo of something they just cooked. You’ve been interested in cooking and have been wanting to get better at that hobby for some time now. Reaching out and striking up a conversation through email or on Twitter asking about some of their favorite recipes is a perfect example. From there you can begin to talk about other topics now that you’ve made that first connection.</P>
          <P>Believe it or not, <strong>this can also help you create better work.</strong> Universal design comes from universal experiences. Expanding and learning about other people’s interests and experiences can help drive better design, development, and business. Stay open to others. Reach out to people to learn about who they are, what they like, and how they feel. People as friends are much more important than people as connections.</P>
          <P>P.S. You can always reach out to me on Twitter as a start 😊</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default Thirteen;
