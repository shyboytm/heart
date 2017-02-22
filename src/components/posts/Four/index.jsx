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

class Four extends Component {
  render() {

    const imgFour = require('../../../img/roc-volume-4-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2%20via%20%40fromcortes"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2"
          googleLink="https://plus.google.com/share?url=https%3A//www.facebook.com/sharer/sharer.php?u=https%253A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%2523.2iqcydlb2" />
        <div id="4" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgFour} imgAlt="Why You Should Seek Boredom" />
          <div className="mb5 tc">
            <H size={1}>Why You Should Seek Boredom</H>
            <span className="blue pr3">Volume 4</span>
            <span className="black-50">Published Oct 6 2016</span>
          </div>

          <P>Hey! Welcome to Volume 4 of The Rate of Change, hope your having a great week! As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>With Field Notes’ new edition Lunacy being released this week, I added the edition to the Fieldy wallpaper section for you to download and enjoy. <L hrefLink="http://www.fieldy.co">Check it out →</L></P>
          <P>I’ve been working on some fun branding elements for Quarry and have been putting a bunch on Dribbble for you to see how it’s coming along. <L hrefLink="https://dribbble.com/fromcortes">Check them out →</L></P>
          <P>I also finished another project for Quarry, Calligritype’s new website! Although I’m not officially launching it until next week, you guys get an early announcement for being awesome ❤️. <L hrefLink="http://www.calligritype.us">Check it out →</L></P>
          <H size={2}>Personal Life</H>
          <P>I got a new puppy this week, Milo the Whippet. At first I was looking to get a greyhound but felt the species was too big for my apartment. I decided to get a whippet instead and fell in love with this little guy. He’s 12 weeks old and I’m so excited for him to join the Cortés family! I’ll be posting pictures on my <L hrefLink="https://twitter.com/fromcortes">Twitter if you’re interested.</L></P>

          <LineBreak />

          <P><DropCap>C</DropCap>urrently, we live in a society filled with products that remove boredom from your life. Whenever you have an extra 5 minutes that you need to wait for something, what do you do? You pick up your phone and scroll.</P>
          <P>Boredom is interpreted as something negative. We do whatever we can to eliminate the act of being bored. We are so used to keeping things moving: meeting after meeting, project after project, TV show after TV show. But, what if I told you to <em>seek</em> and <em>accept</em> boredom? Seems like a funny thing to ask, right? Being productive is rewarded and looked up to, how could I ask you to do nothing?</P>
          <P><strong>A state of boredom lets your mind wander and make connections. Boredom creates an accepting foundation for wild ideas. Boredom is a working ground for restless minds.</strong></P>
          <Blockquote><strong>Creativity</strong> — the ability to transcend traditional ideas, rules, patterns, relationships, or the like, to create meaningful new ideas, forms, methods, interpretations, etc.</Blockquote>
          <P>Great ideas are discovered by connecting topics and issues that aren’t normally brought together. Creating new, non-existent ideas relies on connecting experiences, knowledge, patterns, etc. that were not previously connected. To think this way, time to reflect and think are required.</P>
          <P>Take Uber as an example. It sounds obvious now, but connecting modern technology, communities, and taxis to create Uber took time and unrelated connections. If you try and put yourself in a position before Uber existed, these topics don’t really seem to coordinate with each other. Those connections had to be made somehow to materialize one of today’s most successful companies.</P>
          <P>When focusing on work or watching the latest TV show, there is no time to connect much of anything outside of what you are doing. That’s why breaks are such a crucial part to your work days. Getting up to stretch a couple times or take a quick walk outside really helps to clear your mind and begin connecting new ideas.</P>
          <P>One of my favorite examples of a company that makes breaks a priority is Ugmonk. Starting last year, Jeff takes the company on a retreat to take a break from everything going on in the company. They reflect on what they have done, what they are doing, and the future of the company. Last year, they came up with the idea for Ugmonk 2.0. While I’m writing this, the Ugmonk team is at their second year of this, can’t wait to see what comes out of it. <L hrefLink="http://ugmonk.com/2015/10/08/a-clearer-vision/">Here is their recap from last year</L>.</P>
          <P>Now I am not saying you have to lay on your bed and stare up at the ceiling to experience what I am talking about. People can experience “boredom” in different ways. The main idea is giving the most commonly used parts of your brain a break to sit back and think in retreat from the rest of the world.</P>
          <P>This is different for everyone. For me, going to the gym, walking my dog, drawing, and listening to music helps me the most. They help me reflect on my work, ideas, relationships, and connect things that inspire me. Some of my favorite ideas I have come up with for professional and personal work are a result of boredom.</P>
          <P>Be intentional in finding ways to take breaks and experience your version of boredom. Schedule time if you need to, reflect and write down important thoughts from that time. You would be surprised how helpful just a couple minutes a day is.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default Four;
