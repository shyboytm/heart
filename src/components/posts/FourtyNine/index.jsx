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

class FourtyNine extends Component {
  render() {

    const imgFourtyNine = require('../../../img/roc-volume-49-cover.png');

    const imgBeatsOne   = require('../../../img/postImgs/beatsx-review-3.png');
    const imgBeatsTwo   = require('../../../img/postImgs/beatsx-review-2.png');
    const imgBeatsThree = require('../../../img/postImgs/beatsx-review-5.png');
    const imgBeatsFour  = require('../../../img/postImgs/beatsx-review-7.png');
    const imgBeatsFive  = require('../../../img/postImgs/beatsx-review-8.png');
    const imgBeatsSix   = require('../../../img/postImgs/beatsx-review-6.png');
    const imgBeatsSeven = require('../../../img/postImgs/beatsx-review-4.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Your%20Workflow%20is%20Not%20Important%20by%20%40fromcortes%20http%3A//blog.cortes.us/your-workflow-is-not-important"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/your-workflow-is-not-important"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/your-workflow-is-not-important" />
        <Content id="49">

          <Image imgSrc={imgFourtyNine} imgAlt="BeatsX Headphones Review" />
          <div className="mb5">
            <H size={1}>BeatsX Headphones Review</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 49</span>
            <span className="black-50 pr3">Published Aug 17 2017</span>
          </div>

          <P>Welcome to Volume 49 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>As you may know, I launched my new version of this blog at blog.cortes.us last week. What I didn’t tell you is this is more of a version 1.5 than a version 2.0. I have some big things planned and some big changes coming to this blog in a few weeks. Much more organized with much more variety in content is on the horizon. While waiting to start my new job I’ve been working hard to get the next version up and running. More on this soon!</P>
          <P>As usual, Aaron and I have been working day in and day out on our new project <L hrefLink="https://livtra.co">Livtra</L> and I must say it is coming along beautifully. Everything looks and feels great as we’re building out new features. You will finally have a more detailed place to keep track of your life here soon. We’re planning to launch a private Beta towards the end of next month!</P>
          <H size={2}>Personal Life</H>
          <P>I am happy to announce that I have accepted a job offer and will be starting the next step in my career next week! I will be joining the team over at <L hrefLink="https://madebyspeak.com">Speak</L> as a web designer and developer, making and implementing awesome stuff for clients. I’ll be working on-site at their HQ in Memphis and I’m excited to learn and grow my career here for the foreseeable future!</P>

          <LineBreak />

          <P><DropCap>I</DropCap> have been using the BeatsX Earphones for about a month at the time of writing this. I have been switching use between my MacBook Pro, my iPhone 7, and my iPad Pro 12.9" at default settings to get the least biased usage of them. By no means am I an audiophile, but I used to do a lot of music production in college so I have a relatively good ear for reviewing these. I listen to a wide variety of music; usually hip-hop/rap, ambient electronic, classical, salsa, reggaeton, jazz, and R&B.</P>
          <P>I have also used an array of different earphones and headphones and have usually preferred earphones so I was excited to get the BeatsX Earphones. As you may know, I have always been a huge fan of tech, so I like to include reviews here and there of purchases I make in this blog. So with that all said, let’s get started!</P>

          <H size={2}>What Comes in the Box?</H>
          <P>Apple seems to have revamped the packaging for Beats headphones since the last time I bought something from Beats. Although still distinct from Apple’s core product packaging, you can see the pure white box with some minimal type on the side, using the Beats red accent.</P>
          <Image imgSrc={imgBeatsOne} imgAlt="BeatsX Box" />
          <P>Inside the box, you are first greeted with a front panel holding the headphones. Underneath the earphones panel, you will find a folder of sorts, the top containing different ear piece sizes and optional secure-fit wingtips for stability. The bottom of the folder contains a carrying case, as well as a small quick-charge lightning to USB adapter. Lastly, the middle slot of the folder has your standard manual, warranty, and complimentary Beats die-cut sticker.</P>
          <GalleryThree
            imgOne={imgBeatsTwo}
            imgTwo={imgBeatsThree}
            imgThree={imgBeatsFour} />
          <P>The packaging is straight to the point and a great compliment to some beautiful hardware. I keep my box on my bookshelf as a nice visual compliment and accent amongst the books I own.</P>

          <H size={2}>The Good</H>
          <P>I first saw the BeatsX Earphones shortly after the announcement of the new AirPods from Apple. Being part of the same company, I was a bit surprised to see Apple go with such a different design and use case between the two, for almost the same price. However, the more I looked into getting a new set of Bluetooth headphones, the more I was attracted to the look of the BeatsX.</P>
          <P>For one, they come in black, which would match all the other tech gear I own currently. They also had a strap that hangs around your neck, making it easy to take them off without losing them to do something else (Airpods…ahem), and extra security if one fell out during the day or at the gym.</P>
          <Image imgSrc={imgBeatsFive} imgAlt="BeatsX on Black Background" />
          <P>
            I would give the BeatsX a 9/10 in terms of sound quality for earphones. Beats headphones are known for being more on the bass side of sound as I have experienced in the past, but I do not think that is the case with the BeatsX Earphones. I left the settings default on all of my devices and have gotten everything I expected from high-end earphones. The high-end treble comes in on ambient electronic and classical music tracks, while the low-end bass kicks flood in for hip-hop and rap tracks. Mid-level sounds and voice stay balanced and audible throughout the different genres. The only part keeping these earphones from being 10/10 is the lack of noise cancellation. If I am listening to more upbeat electronic or rap music, I can not hear any outside sounds. But when I am trying to listen to calmer music, I can hear other people talking, even in a quiet coffee shop with just a few people around. It’s nothing <em>that</em> distracting, but if that is an issue for you I thought I’d let you know.
          </P>
          <Image imgSrc={imgBeatsSix} imgAlt="BeatsX held up" />
          <P>A small but great feature about the BeatsX is magnetic ends of the earphones. This makes them stick together around your neck to avoid that awkward bouncing everywhere of most earphones while walking with them dangling. I also have a habit of getting headphones stuck on everything I walk by, so this was a welcome change in hardware for me. With the nature of Bluetooth headphones, this design also makes it easy to do chores around the house without carrying the device or worrying about them getting stuck or wet while cleaning.</P>
          <P>A major advantage of BeatsX being part of the Apple ecosystem is having the same charge port on my headphones as I do on my iPhone and iPad. Not to mention the quick charging that Apple implemented. This combination makes it easy to charge in the morning before I head out to work for the day for 20–30 minutes, and have 8 hours of listening time for my day. I have yet to have these headphones die on me in the middle of the day, so 8 hours seems to be more than enough for an average day for me.</P>
          <Image imgSrc={imgBeatsSeven} imgAlt="BeatsX Ports" />

          <H size={2}>The Bad</H>
          <P>As I previously mentioned, I compared the BeatsX Earphones to the Apple AirPods. Something that baffles me about this comparison is the price difference. Apple made a huge deal about the AirPods and are selling them for $159 at the time of writing this article. Guess how much the BeatsX are? Only $10 less at $149. I understand the better quality of sound that the BeatsX contain, but I think the gap there should have been more. BeatsX at $139 and AirPods at $169 would be a better gap in my opinion. Maybe Apple purposely did that to sell more AirPods since they are directly Apple branded? Who knows.</P>
          <P>Not a deal breaker, but like I previously mentioned, there is not much noise cancellation tech going on here. The saving grace is the nature of in-ear earphones, as they naturally add noise cancellation given their hardware structure. I have never found outside sound to be distracting while working or reading, but it is definitely noticeable when listening to calmer music.</P>
          <P>My last gripe with these earphones is the power button and setup process. The power button is a bit difficult to press if you have large hands/fingers. On top of that, there is a light directly on the button that you need to be able to see when pressing the button which makes it near impossible to do sometimes. I have gotten used to the way I need to press the power button, but I still do not understand the setup and usage choices Apple made. Each time I want to use my headphones, I have to open the Bluetooth settings of the device I want to use and click to connect, then wait a few seconds for them to connect. Not sure of the constraints here of course, but I wish the devices sensed when the headphones were on and either connected automatically based on what device was open and in use. At the very least, a non-invasive notification/prompt on your device asking if you want to connect would be great.</P>

          <H size={2}>Overall</H>
          <P>All in all, I love these headphones and am very pleased with the purchase I made. Despite the small issues I have with the setup, price, and noise cancellation, these are the best earphones I have owned to date. I personally think they are a better experience than what I have seen and heard about the AirPods, including a much better sound quality. I personally enjoy the stealthy design of the BeatsX in black and have loved using them throughout the day at the gym, at home, at work, and out and about. I do wish the price was a tad lower but will happily pay the amount I did for an investment in Bluetooth headphones that I will have for a while.</P>
          <P>I give the BeatsX Earphones a 9/10 and would definitely recommend them to anyone wanting to invest in a new pair of great sounding Bluetooth headphones.</P>
          <L hrefLink="https://www.apple.com/us-hed/shop/product/MLYE2LL/A/beatsx-earphones-black?fnode=69b5b3520b83608616318cd1a63035bee70d11ae25b1904e9385e7d0ed8a3e3192959d30abb42aafc086fc1925876032cbfce051958caea8a9d134eaf19f4db4902b155ea14d0085235835b0eb7543dcac432461f43304579ce1d22daf2919e8">Buy the BeatsX Earphones in Gray, Black, White, or Blue here →</L>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FourtyNine;
