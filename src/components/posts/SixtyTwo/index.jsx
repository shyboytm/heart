import React, { Component } from 'react';

import Content from '../../Content';
import Header from '../../Header';
import Footer from '../../Footer';

import DropCap from '../../type-elements/DropCap';
import H from '../../type-elements/H';
import Image from '../../type-elements/Image';
import L from '../../type-elements/L';
import LineBreak from '../../type-elements/LineBreak';
import P from '../../type-elements/P';
import PostEnd from '../../post-elements/PostEnd';
import Social from '../../type-elements/Social';

class SixtyOne extends Component {
  render() {

    const imgSixtyOne = require('../../../img/roc-volume-62-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=How%20I%20Come%20Up%20with%20Writing%20Topics?%20by%20%40fromcortes%20http%3A//blog.cortes.us/how-to-come-up-with-writing-topics"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/how-to-come-up-with-writing-topics"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/how-to-come-up-with-writing-topics" />
        <Content id="62">

          <Image imgSrc={imgSixtyOne} imgAlt="How to Come Up with Writing Topics" />
          <div className="mb5">
            <H size={1}>How to Come Up with Writing Topics</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 62</span>
            <span className="black-50 pr3">Published Nov 17 2017</span>
          </div>

          <P><DropCap>H</DropCap>ey there 👋, this week marks 62 consecutive works of writing and releasing an article every week. Still sounds crazy to say this out loud sometimes! Anyways, one of the questions I get most often is how I come up with a topic to write about every week. While this can definitely be tough at times, I’d love to share my approach to this with you. Let’s get to it!</P>
          <H size={2}>Write Down Everything</H>
          <P>This is easily the best advice I can give you. You know those random little ideas you have while in the shower, driving to work, washing dishes, or even using the bathroom? Write. Those. Down. Even if you don’t have much to go off of right off the bat, keep a list of these topics somewhere that you can reference later. Whether it’s a one line title or a couple bullet points about the topic, having these to reference later make a great list to pull from.</P>
          <P>I usually have a list of 10–15 topics I can write about. Some of them have been there since I started the list and just haven’t had time to write about them, while some I use the very week I write them down. This is where I go to every time I sit down to write the article for the week and the list never lets me down.</P>

          <H size={2}>Consuming Content</H>
          <P>I commonly refer to this as a push/pull method. If you want to write more information, you need to consume more information. On top of this, the type of information you consume is important too. There is definitely some overlap available when writing about certain topics, but being conscious of what content you are consuming definitely helps to come up with topics.</P>
          <P>For example, I love listening to books and podcasts. I usually have a book or podcast I’m listening to on my commute or while I’m at work. Through this I learn about new topics and hear new perspectives on topics I already know about. Either way, this is helpful to bring new ideas to share through writing and has become a normal part of my routine.</P>

          <H size={2}>Use Things You Know and Care About</H>
          <P>This one may seem obvious, but bringing areas of your life you care about into your writing is one sure way to bring better writing to your world.</P>
          <P>For example, I’ve been passionate about technology and video games ever since I can remember. Because of this I like writing my thoughts and reviews of gear I buy or video games I play. While I may not be the most experienced in writing on these topics, bringing my expertise on design and the tech industry usually provides a unique experience on these topics that folks like you enjoy.</P>
          <P>Implementing topics you know and care about brings about an even bigger point of writing for yourself. Personally, I don’t think anyone should do anything just for the pursuit of followers, money, etc. Bringing your passions to your writing (or whatever it may be) is always a great resource for finding why you started writing in the first place. Writing on topics in this realm always seems to rekindle any lost perseverance for writing and reminds me why I started this sixty-two weeks ago.</P>

          <LineBreak />

          <P>These are just a high-level overview of things I find helpful and I hope you’ll find a way to apply them to your writing as well. Let me know if these are useful and if you’d like more short guides like this in the future!</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default SixtyOne;
