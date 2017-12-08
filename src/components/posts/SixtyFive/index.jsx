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

class SixtyFive extends Component {
  render() {

    const imgSixtyFive = require('../../../img/roc-volume-64-cover.png');

    const consistencyOne = require('../../../img/postImgs/moodboard-consistency-1.jpeg')
    const consistencyTwo = require('../../../img/postImgs/moodboard-consistency-2.jpeg')
    const exampleOne = require('../../../img/postImgs/moodboard-example-1.jpeg')
    const exampleTwo = require('../../../img/postImgs/moodboard-example-2.png')
    const exampleThree = require('../../../img/postImgs/moodboard-example-3.jpeg')

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Questions%20to%20Ask%20Employers%20Hiring%20Remotely%20by%20%40fromcortes%20http%3A//blog.cortes.us/tips-to-make-better-design-moodboards"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/tips-to-make-better-design-moodboards"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/tips-to-make-better-design-moodboards" />
        <Content id="65">

          <Image imgSrc={imgSixtyFive} imgAlt="Tips to Make Better Design Moodboards" />
          <div className="mb5">
            <H size={1}>Tips to Make Better Design Moodboards</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 65</span>
            <span className="black-50 pr3">Published Dec 8 2017</span>
          </div>

          <P><DropCap>B</DropCap>elieve it or not, creating a moodboard is one of the most important parts of the design and product process. Surprisingly, this also seems to be an overlooked part of the process as well. I don’t mean overlooked altogether, more so overlooked in importance. Moodboards I come across tend to be a handful of images the designer thought “looked cool” but didn’t serve an actual purpose in the completed project.</P>
          <P>When I first started I had a poor habit of doing this as well. When I first found Dribbble I saved every other shot and put a mess of a moodboard together for early projects. After a couple dozen projects I realized more and more the importance of a moodboard and how to improve my approach. I’d like to share a few key points I’ve learned over the years to help you improve your process as well.</P>

          <H size={2}>Focus on Consistency</H>
          <P>This is the biggest shortcoming I see around moodboarding. A moodboard shouldn’t just be a bunch of nicely designed screenshots you find on Tumblr or Pinterest. You need to really be intentional with what you put on this moodboard for it to be helpful. Let’s take a look at a bad example and a good example. While neither of these are perfect, there are definitely some great points to look at.</P>
          <div className="pr3-l w-50-l w-100 fl">
            <Image imgSrc={consistencyOne} imgAlt="Poor Moodboard Example" />
          </div>
          <div className="w-50-l w-100 fl">
            <Image imgSrc={consistencyTwo} imgAlt="Good Moodboard Example" />
          </div>
          <P>In the left example, the imagery depicted seems quite inconsistent and it’s hard to tell where the focus is here. There is everything from typography, icons, furniture, hardware, and what seems to be old anatomy illustrations. The size and placement of these elements don’t feel quite right either, with elements unaligned and no apparent pattern. As you can imagine, this is a bad example in my opinion when approaching moodboards. Sure, the elements pictured look nice and clean, but they don’t really give me a sense of defined goals or a concrete direction.</P>
          <P>On the right, you can see a bit more focus here with the foundational elements properly used. There is a consistent goal in varied textures, a high-end feel, and earthy tones for color throughout. This one also has a nice grid look with consistent sizing and levels of hierarchy. Of course it’s not perfect, but I think the overall approach here is much better.</P>
          <P>Although this is a brand moodboard, these same principles are applicable to different industries, especially product design. Finding consistency in UX patterns and different types of UI layouts can be an imperative addition to your product and process overall.</P>

          <H size={2}>Adjusting and Editing when Needed</H>
          <P>Playing off of my point on consistency, adjusting and editing elements can really go a long way. I have noticed on teams of designers I’ve lead where a designer will put an entire web page on a moodboard even though they wanted to just highlight one of the sections.</P>
          <P>Taking the time to edit pieces of a moodboard can help establish more focused and conciseness. If there is one small part of an image or website you want to focus on, crop it! You can even add to it or edit the image if it will help better convey something for the moodboard. Heck, I like to even write notes about my moodboard sometimes.</P>

          <H size={2}>Branching Mediums and Industries</H>
          <Blockquote>New project! Okay sweet let me just pull up the ol’ Dribbble… type in design systems… mhm yes nice. Alright now drag this into my moodboard folder. Okay now let me grab that iOS ‘concept’ that has no usability but has neon gradients. Just drag that baby right into the folder too…</Blockquote>
          <P>...and repeat.</P>
          <P>All joking aside, this is a very common pattern. Just focusing on other work in the same industry as the new project can be really limiting. I’m not saying to completely abandon relevant visual and usability patterns, but branching out is important. There are a ton of great patterns in other industries that are completely ignored by others, in design especially.</P>
          <P>For example, I worked on a fully-digital car dashboard UI recently and found some great inspiration elsewhere. I looked at movies, video games, and even old media players. You wouldn’t think a still-frame from the movie Tron or the dashboard on the Nintendo Switch would be contributing factors to this project, but I found them more helpful than sticking with existing car elements.</P>
          <P>Look outside of the industry you are looking at. Even going outside and finding inspiration in the real world without looking through a computer can be beneficial. Taking photos of these elements or patterns is an easy way to get unique perspectives digitally for you to reference. Keep your eyes open, finding the perfect solution can be found in the weirdest places sometimes.</P>

          <H size={2}>Make it Look Nice</H>
          <P>Simple as that. Taking the time to make your moodboards look and feel better than just placing them wherever they fit goes a long way. You are a designer, right? Put those skills to work! Add some text, color, proper spacing, etc. to really bring this moodboard together. Here are some nice examples by <L hrefLink="https://dribbble.com/do-hee">Do-Hee Kim</L> on Dribbble:</P>
          <GalleryThree
            imgOne={exampleOne}
            imgTwo={exampleTwo}
            imgThree={exampleThree}
          />

          <P>That’s all folks, let me know if this helps or if there are other ways to improve your moodboards that I missed!</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default SixtyFive;
