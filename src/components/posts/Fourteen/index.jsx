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

class Fourteen extends Component {
  render() {

    const imgFourteen = require('../../../img/roc-volume-14-cover.png');
    const imgTNOne    = require('../../../img/postImgs/taste-notes-one.png');
    const imgTNTwo    = require('../../../img/postImgs/taste-notes-two.png');
    const imgTNThree  = require('../../../img/postImgs/taste-notes-three.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Distractions%20Provide%20Progress%20by%20%40fromcortes%20http%3A//blog.cortes.us/how-cure-creative-block"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/how-cure-creative-block"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/how-cure-creative-block" />
        <Content id="14" >

          <Image imgSrc={imgFourteen} imgAlt="How to Cure Creative Block" />
           <div className="mb5 tl">
            <H size={1}>How to Cure Creative Block</H>
            <span className="blue pr3">Volume 14</span>
            <span className="black-50">Published Dec 15 2016</span>
          </div>

          <P>Welcome to Volume 14 of The Rate of Change, hope your having a great week. This week’s post is a little different but as I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>This is not necessarily under the Quarry brand, but still under side projects. I launched Taste Notes officially this week! It’s been done for a few weeks now, but I’ve been adding and refining a few things. It’s a side project based around coffee roasts, shops, gear, and culture! You can <L hrefLink="http://coffee.cortes.us/">check out the site here</L> and check out the new <L hrefLink="https://medium.com/taste-notes">Taste Notes blog here</L>. Let me know what you think!</P>
          <GalleryThree
            imgOne={imgTNOne}
            imgTwo={imgTNTwo}
            imgThree={imgTNThree} />
          <H size={2}>Personal Life</H>
          <P>I got a pretty bad cold over the past week so I’ve been taking things pretty easy. Besides full-time work at Satchel, I’ve been listening to J. Cole’s new album, playing Pokémon Sun over again, and developing my cooking skills.</P>
          <P>I’ve been getting into cooking a lot lately. It’s funny because I really never cared for cooking up until this point. I knew how to cook a lot more than the average person my age but I’ve always just cooked the basics to get by. But since my trip to San Francisco a few weeks ago, I was inspired to pursue different methods and recipes outside of my normal palette. It’s been fun so far, I made chicken noodle soup from scratch since I’ve been sick. I made fried chicken and fries from scratch this week as well since I miss hot chicken from Nashville. I also made Honey Cinnamon Chicken with Lime, came out pretty good! Anyways, now for this week’s article.</P>

          <LineBreak />

          <P><DropCap>I</DropCap>t’s easy to get stuck in your normal routine of inspiration. You wake up, browse the news, check Twitter, search Product Hunt, find cool new shots on Dribbble, pin some modern stuff on Pinterest, and go throughout your normal schedule. Creative block creeps up on you and it’s hard to know why, let alone fix it.</P>
          <P>In my experience, creative block comes from a lack of diversity in routine and inspiration fuel in life. When you get stuck in the same sources of visual and intellectual inspiration, there isn’t much to trigger your new ideas. Your brain is pulling in the same thing over and over instead of something it isn’t used to. Something that can make ideas click together that didn’t to make sense before.</P>
          <P><em>I recommend making small changes to your routine and places you look for inspiration as a good start. <strong>Here is a list of a few things you can start with:</strong></em></P>
          <ol className="lh-copy black-70 f4">
            <li><strong>Take more walks.</strong> Walk to work instead of driving. If that’s not possible, take a quick walk before your drive. Or even better, work out before or after work, even if it’s just 15 minutes a day.</li>
            <li><strong>Work from somewhere different.</strong> Change up your environment or even just the layout of your desk and what you have on it. And make sure you are comfortable with your layout. Keeping a clean desk area is very important, only have what you absolutely need and use on there.</li>
            <li><strong>Diversify your inspiration.</strong> Instead of looking at the newest inspiration on Dribbble, search for older resources. There is a TON of inspiration for layouts, letters, brands, etc. from older graphic design work and articles.</li>
            <li><strong>Talk to more people.</strong> Instead of browsing the news while your waiting for your morning coffee, strike up a conversation with the barista, a coworker, or a random person in line. Learning from different perspectives is a sure way to provide different ideas stirring in your mind.</li>
            <li><strong>Start a new hobby.</strong> For example, I’ve started cooking a lot more at home. Working with my hands and having some time away from technology gives me time to think and let ideas stir. Try that new thing you’ve been wanting to try.</li>
            <li><strong>Try new food and drinks.</strong> Everyone loves food. A nice way to change what your used to is by trying a new restaurant or coffee shop. And if you aren’t in the position to eat out, cooking new food from home is a good option. You can mix this with #5 if you’d like.</li>
            <li><strong>Work in analog more.</strong> Sketch/write your ideas on a nice new notebook instead of relying on technology. There’s something about pencil to paper that’s really satisfying and inspiring for ideas.</li>
            <li><strong>Don’t rely on digital.</strong> To go with #6, don’t rely on finding ideas and inspiration in the digital space. Books and magazines are awesome places for inspiration. Some of my favorites include <L hrefLink="http://amzn.to/2gpaL00">Designing Brand Identity</L> and <L hrefLink="http://amzn.to/2hiHmSa">Grid Systems in Graphic Design</L> for books. WIRED, The Great Discontent, and KINFOLK are some of my favorite magazines for design inspiration.</li>
            <li><strong>Take breaks.</strong> Getting in your head too much is never healthy. If you feel frustrated with creative block, step away for a bit. When you come back you’ll have a fresh perspective to work with. Whether it be 5 minutes or a few days, take the time you need to reset.</li>
          </ol>
          <P>Overall, it’s important to change what your mind is used to seeing and experiencing to avoid creative blocks. There are countless ways to do this, but I hope the points above give you a good starting point. Let me know if you have any other recommendations for others, always happy to hear different perspectives and tactics on this subject.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default Fourteen;
