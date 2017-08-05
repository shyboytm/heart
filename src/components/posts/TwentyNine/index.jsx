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

class TwentyNine extends Component {
  render() {

    const imgTwentyNine     = require('../../../img/roc-volume-29-cover.png');
    const imgUltrafineOne   = require('../../../img/postImgs/ultrafine-1.jpeg');
    const imgUltrafineTwo   = require('../../../img/postImgs/ultrafine-2.jpeg');
    const imgUltrafineThree = require('../../../img/postImgs/ultrafine-3.jpeg');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Apple%20LG%20Ultrafine%20Monitor%20Review%20by%20%40fromcortes%20http%3A//blog.cortes.us/apple-lg-ultrafine-review"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/apple-lg-ultrafine-review"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/apple-lg-ultrafine-review" />
        <Content id="29" >

          <Image imgSrc={imgTwentyNine} imgAlt="Apple LG UltraFine Monitor Review" />
           <div className="mb5 tl">
            <H size={1}>Apple LG UltraFine Monitor Review</H>
            <span className="blue pr3">Volume 29</span>
            <span className="black-50">Published Mar 30 2017</span>
          </div>

          <P>Welcome to Volume 29 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>In the beginning stages of working with a new friend of mine on a new project idea. Obviously I can’t say much, but let’s just say it’s going to be more useful than the past static sites I’ve made with Quarry.</P>
          <H size={2}>Personal Life</H>
          <P>Next week I’m heading to Nashville for a few days! Excited to catch up with my team at Satchel and get some updates on our progress on the business side of things.</P>
          <P>I’m just about wrapped up with my new website, just have some small copy changes I need to add. Can’t wait to show it to you all!</P>
          <P>I’ve been streaming quite a bit and having a lot of fun being open and transparent while others interact with me in the chat. We’ve been making my new personal site and it’s coming along really well. Be sure to follow the streams and see my schedule here: <L hrefLink="twitch.tv/cortesarts">twitch.tv/cortesarts</L></P>

          <LineBreak />

          <P><DropCap>S</DropCap>omething a little different from what I usually write on this blog, but being as into tech as I am, it’s about time! Don’t worry, posts like these will be very sparse, but I’ve gotten quite a few questions about the new LG Apple monitor I got recently. So, I thought it would be appropriate to give my perspective on the monitor as a designer and developer and maybe help you make a purchasing decision. I purchased the 21.5" display, but most of the information here should be applicable to the larger 27" model. Let’s get right into it!</P>
          <GalleryThree
            imgOne={imgUltrafineOne}
            imgTwo={imgUltrafineTwo}
            imgThree={imgUltrafineThree} />
          <H size={2}>Monitor Specs</H>
          <ul className="list lh-copy black-60 f4 mv5">
            <li className="black i mb4"><strong>Display Size</strong>: 21.5-inch (diagonal) 4K display with IPS technology</li>
            <li className="black i mb4"><strong>Resolution</strong>: 4096-by-2304 with support for millions of colors</li>
            <li className="black i mb4"><strong>Brightness</strong>: 500 cd/m²</li>
            <li className="black i mb4"><strong>Color Gamut</strong>: P3 wide color gamut</li>
            <li className="black i mb4"><strong>Ports</strong>: One USB-C (input), three USB-C (USB 2, 480 Mbps)</li>
            <li className="black i mb4"><strong>Power Delivery</strong>: Up to 60W over USB-C for host power and charging</li>
            <li className="black i mb4"><strong>Speaker Configurations</strong>: Stereo</li>
            <li className="black i mb4"><strong>Power</strong>: Built-in power supply</li>
            <li className="black i mb4"><strong>Height</strong>: 15.3 in./38.8 cm</li>
            <li className="black i mb4"><strong>Width</strong>: 19.9 in./50.5 cm</li>
            <li className="black i mb4"><strong>Depth</strong>: 8.6 in./21.9 cm (with stand), 1.7 in./4.4 cm (without stand)</li>
            <li className="black i mb4"><strong>Weight</strong>: 12.3 lb./5.6 kg</li>
          </ul>

          <H size={2}>The Bad Things</H>
          <P>I prefer hearing bad news first, so that’s what we’re going to go with here.</P>
          <P>All in all, there isn’t really too much bad to say about this monitor. One thing that does bug me about the 21.5" model is how short the screen feels. The screen seems to be a lot longer than it is tall, which makes the screen feel incredibly small at first glance. This was quite a turn off for me when I was first at the Apple store wanting to purchase it. But, the larger model of this monitor was about twice the price of the 21.5" one. Although it did come with a built in camera and microphone and felt like a more natural size, I personally couldn’t justify the price tag. I opted to get the smaller one and if it felt too small, I would use the 14 days I had to return the monitor.</P>
          <P>While the size is just a personal preference, there are also some bugs to be aware of with the monitors. One small bug that I’ve noticed is a ~1s delay when changing screen brightness. Not a huge deal, but there have been quite a few times where I changed the brightness too much by mistake and have to take extra time to fix it. This isn’t just the specific monitor I got either, I tested the in-store ones and saw the same thing. The employees I spoke to have also had customers report the same issue.</P>
          <P>Another small nuisance comes with the monitor speakers. I wasn’t able to test this bug on other monitors, but there seems to be a huge jump in volume between the first and second volume dot levels. I’m always having to play around with the volume levels when I don’t want to use headphones and it’s quite annoying when I’m working and accidentally touch the volume up button, therefore scaring the crap out of me.</P>
          <P>The last negative aspect of this monitor actually has to do with the new MacBook Pro. The new MBP is the only laptop that this monitor will work with first of all. As someone who only has one monitor, I like to have my laptop open on a stand to have Slack, a video, or design specs in the background while I work. Although a common problem when using high resolution monitors, when connecting my laptop, the resolution of my laptop while connected looks pretty terrible. For most users this won’t really be noticeable, let alone be an issue, but for a designer this creates quite an annoyance when I want to have design work open during code or for a Photoshop preview.</P>

          <H size={2}>The Good Things</H>
          <P>When I was first looking into this monitor, I was a bit thrown off by the hardware. It didn’t seem terrible, but it also wasn’t the beautiful Apple hardware I was used to seeing. I will say, that completely changed when I actually got the monitor in my hands at home. I’m a huge fan of matte black and metal finishes, and the monitor is fully incased in this. The monitor pairs very well with my current setup at home and looks incredible as a centerpiece on my desk when not in use.</P>
          <P>One of the pain points I’ve had with monitors in the past is cable management. One cable to power the monitor, another cable to connect to the laptop, another cable to power the laptop, then cable management for all of those. With the LG Ultrafine, I need a cable to power the monitor, and just one cable to connect the laptop and also charge the laptop. Only one less cable, I know, but the type of cable is a lot easier to manage. Plus, Apple provides some nice cable management knobs to help. And because I keep my monitor and laptop close to each other, I can put the rest of the cable around the top of the stand, leaving no cables in sight. This is extremely helpful for keeping my desk organized and distraction free.</P>
          <P>A cool extra thing about the LG Ultrafine monitor is the adjustable stand. You can lower and raise, as well as pivot the monitor vertically. It’s very smooth and easy to do this, unlike other monitors that have latches and modes involved. I really like this feature because I’m an advocate of good posture while you work, this monitor has helped me sit taller and straighter while working which is great news for my neck and back.</P>
          <P>Last but not least, my favorite part about this monitor is the screen. The content displayed on the screen is in a crisp 4K resolution and is a treat to work on. The color gamut is incredible when watching videos and editing photos with no glare or weird viewing angles. Apple continues to demolish other companies in my book when it comes to displays, and the new LG Ultrafine paired with the new MBP are quite the combination. I cannot recommend this monitor enough if you work with color in any way (design, video, photo, etc).</P>

          <H size={2}>Overall</H>
          <P>I don’t think this monitor is necessary for everyone. If you’re more of a casual user or want a monitor for non-color intensive work (writing, emails, web browsing), you’re probably better off getting a larger and cheaper monitor from Dell, Asus, or even another LG.</P>
          <P>If you are in the creative realm of work, I can highly recommend this monitor. Unfortunately you will need the newest MBP, but if you fall under both of those categories, I’d say this monitor is worth looking into. Personally, I think the 27" is a bit overpriced for what it is, but the 21.5" is at a great price for what you get. And if you have the cash for the 27", it may even be worth looking into getting two of the smaller model for the same price. And yes, you could get another 4K monitor for cheaper, but I don’t think the quality of this display can be matched by any monitor cheaper than the 21.5" model.</P>
          <P>Like anything else, it really depends on your situation and your needs. But if you’re looking to invest into a solid monitor with an unmatched display, after a few weeks of use I highly recommend the LG Ultrafine 4K Display.</P>
          <P><L hrefLink="http://www.apple.com/shop/product/HKMY2VC/A/lg-ultrafine-4k-display">Pick up the monitor from Apple here.</L></P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default TwentyNine;
