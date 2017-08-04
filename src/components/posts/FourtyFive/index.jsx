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

class FourtyFive extends Component {
  render() {

    const imgFourtyFive = require('../../../img/roc-volume-45-cover.png');

    const iphone7 = require('../../../img/postImgs/iphone7-in-hand.jpg')
    const nintendoSwitch = require('../../../img/postImgs/nintendo-switch.jpg')
    const ultrafine4k = require('../../../img/postImgs/ultrafine-4k-monitor.jpg')
    const nintendo3DS = require('../../../img/postImgs/nintendo-ds-pokemon-moon.jpg')
    const blueYeti = require('../../../img/postImgs/blue-yeti-microphone.jpg')
    const sonya5100 = require('../../../img/postImgs/sony-a5100.jpg')
    const ipadPro = require('../../../img/postImgs/ipad-pro-pencil.jpg')

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=My%20Favorite%20Tech%20Purchases%20This%20Year%20by%20%40fromcortes%20http%3A//blog.cortes.us/favorite-tech-purchases-this-year"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/favorite-tech-purchases-this-year"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/favorite-tech-purchases-this-year" />
        <Content id="45" >

          <Image imgSrc={imgFourtyFive} imgAlt="My Favorite Tech Purchases This Year" />
          <div className="mb5 tc">
            <H size={1}>My Favorite Tech Purchases This Year</H>
            <span className="blue pr3">Volume 45</span>
            <span className="black-50 pr3">Published July 13 2017</span>
          </div>

          <P>Welcome to Volume 45 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>This week I started writing some of the reviews for Games and Grids, I’m hoping to launch with 4, depending on how in depth I go with them, be sure to subscribe on the website to stay updated!</P>
          <P>Aaron and I are of course still grinding away at building Livtra, I’ve been showing some small sneak peeks of some work we’re doing on Twitter if you’re into that.</P>
          <H size={2}>Personal Life</H>
          <P>Unfortunately as of this week I am no longer working for Satchel Health anymore and currently on the search for my next opportunity. I was a bit worried about taking the leap to finding a new job opportunity but am extremely grateful for all the folks that showed me support online in helping me to try and find something new. I have a few calls lined up to see where will be a good fit for me, but please let me know if you or someone you know is looking to add someone to their team!</P>

          <LineBreak />

          <P><DropCap>A</DropCap>dmittedly, I am a pretty big tech nerd. Beautiful hardware paired with great software is something I have been passionate about for quite some time. Some folks have asked me to write more reviews on items I purchase so I am starting that with this post and will be sure to do write about future purchases individually. Now, let’s get into my list (in no particular order) from this year.</P>

          <div className="pv3">
            <H size={1}>iPhone 7</H>
            <div className="mt2 f4">
              <L hrefLink="https://medium.com/r/?url=https%3A%2F%2Fwww.apple.com%2Fshop%2Fbuy-iphone%2Fiphone-7">Buy Here</L>
            </div>
            <Image imgSrc={iphone7} imgAlt="iPhone 7" />
            <P>Along with being a tech nerd, I am also admittedly an Apple fan boy, so naturally the iPhone 7 is on my list. The iPhone 7 has been my daily driver since last September when it came out and I switched from an iPhone 6 Plus.</P>
            <P>My favorite part of the upgrade was having Force Touch and a Matte Black finish. Although I didn’t hear great things about Force Touch when it first came out, it has become a natural interaction with my phone. It is always cool to experience that next type of interacting with technology that Apple has created time and time again (a touch screen phone, Digital Crown on Apple Watch, etc). Matte Black colorway was a very much welcome addition as someone who has pretty much every tech item they own in black or gray.</P>
            <P>Overall, the iPhone 7 is just an overall great phone. The speed and display are unprecedented and embodies a piece of work with both beautiful design and function. I recommend the iPhone 7, although if you are not in any rush, the iPhone 8 (or whatever they decide to name it) will be out this September.</P>
          </div>

          <div className="pv3">
            <H size={1}>Nintendo Switch</H>
            <div className="mt2 f4">
              <L hrefLink="https://medium.com/r/?url=http%3A%2F%2Famzn.to%2F2tQgqCh">Buy Here</L>
            </div>
            <Image imgSrc={nintendoSwitch} imgAlt="" />
            <P>Hands down my favorite splurge purchase this year. I’ve said this many times but the Nintendo Switch is the most innovative pieces of hardware I have seen from a gaming company. The ability to take gaming wherever you want and then get home and dock the console to play on your TV is mind blowing. Furthermore, the entire console is small enough to be portable and still put out beautiful graphics. I also love the innovation behind being able to remove the joy-cons from the console to continue your gaming. A little off-topic, but I believe the future of hardware and software will be very much in line with this; modular and adaptable to someone’s preferences.</P>
            <P>Although the game lineup is lack luster at the moment of writing this (I think only <L hrefLink="https://medium.com/r/?url=http%3A%2F%2Famzn.to%2F2vr067X">Zelda Breath of the Wild</L>, <L hrefLink="https://medium.com/r/?url=http%3A%2F%2Fwww.nintendo.com%2Fgames%2Fdetail%2Fminecraft-nintendo-switch-edition-digital-version">Minecraft</L>, and <L hrefLink="https://medium.com/r/?url=http%3A%2F%2Famzn.to%2F2uozg3o">Mario Kart 8</L> are worth buying), there are quite a few great looking games coming this year. I am most looking forward to and have already pre-ordered <L hrefLink="https://medium.com/r/?url=http%3A%2F%2Famzn.to%2F2t4LQ45">Splatoon 2</L>, <L hrefLink="https://medium.com/r/?url=http%3A%2F%2Famzn.to%2F2uofS6M">Pokkén Deluxe</L>, <L hrefLink="https://medium.com/r/?url=http%3A%2F%2Famzn.to%2F2unODcA">Mario Odyssey</L>, and <L hrefLink="https://medium.com/r/?url=http%3A%2F%2Famzn.to%2F2ttRSKQ">RiME</L>. Not to mention all the games coming out next year and all the great Indie games we’ll be getting in between.</P>
          </div>

          <div className="pv3">
            <H size={1}>LG UltraFine 21" 4K Display</H>
            <div className="mt2 f4">
              <L hrefLink="https://medium.com/r/?url=https%3A%2F%2Fwww.apple.com%2Fshop%2Fproduct%2FHKMY2VC%2FA%2Flg-ultrafine-4k-display%3Ffnode%3Dd3cbe99d8c89fb069280a5ae8b87de5ac3ecbad619ef1ca981d36aa032a9e1a6fa23a2f4576efa6c08a55c5955bd9c96ac89810fffe943d6a8022e6610f546768f3ee6fa5bfeae8ab35954c164487e6edce8e614f6beaa9a3e522e5c1a49cb8f">Buy Here</L>
            </div>
            <Image imgSrc={ultrafine4k} imgAlt="" />
            <P>I will not go into too much detail since I wrote a full review on this item (<L hrefLink="https://blog.cortes.us/apple-lg-ultrafine-review">read</L>!) but I truly love this monitor so much. It’s been such a valuable asset to my workflow with a gorgeous display that pairs effortlessly with my new Macbook Pro. Overall, an amazing piece of hardware that I’d recommend to anyone. It is a relatively good price for something from Apple.</P>
          </div>

          <div className="pv3">
            <H size={1}>Nintendo 3DS</H>
            <div className="mt2 f4">
              <L hrefLink="https://medium.com/r/?url=http%3A%2F%2Famzn.to%2F2tYrsTq">Buy Here</L>
            </div>
            <Image imgSrc={nintendo3DS} imgAlt="Nintendo 3DS" />
            <P>If you know anything about me, you know I love my video games. Gaming has been a part of my life since I got a GameBoy Color and Pokémon Red when I was 4. Naturally, the new 3DS has become part of my gaming setup and is one of my favorite consoles. Being able to play my favorite Nintendo games (especially Pokémon) on the go has made traveling a breeze. Since I travel to Nashville quite often for work, having a Nintendo 3DS at airports and on airplanes makes time fly.</P>
            <P>Outside of the games, the Nintendo 3DS is a decent piece of hardware. Feels very well built and is a nice, sturdy weight. Although the outside material is glossy plastic, I give Nintendo props for making a plastic finish still feel high-end. I of course went for the gray finish but there are quite a few color options available as well as limited editions. Lastly, I love being able to customize the theme of my home screen! I really wish more consoles allowed for this.</P>
          </div>

          <div className="pv3">
            <H size={1}>Blue Yeti Microphone</H>
            <div className="mt2 f4">
              <L hrefLink="https://medium.com/r/?url=http%3A%2F%2Famzn.to%2F2vqSulX">Buy Here</L>
            </div>
            <Image imgSrc={blueYeti} imgAlt="" />
            <P>As a <L hrefLink="https://twitch.tv/cortesarts">Twitch</L> streamer, having great audio is important. Naturally, I went ahead and picked up a Blue Yeti Microphone because I personally believe you can’t beat the value you get for the price of this microphone. Setup is super simple and works like a charm while having multiple settings depending on your use case. I picked up a silver finish, but I recommend getting black and including a pop filter for a better sound quality.</P>
          </div>

          <div className="pv3">
            <H size={1}>Sony a5100</H>
            <div className="mt2 f4">
              <L hrefLink="https://medium.com/r/?url=http%3A%2F%2Famzn.to%2F2usgTdE">Buy Here</L>
            </div>
            <Image imgSrc={sonya5100} imgAlt="" />
            <P>I bought this camera originally to shoot videos for <L hrefLink="https://youtube.com/cortesarts">YouTube</L>, but it has become one of my favorite cameras I have owned for taking photos instead. I am no photography by any means, but the quality of this camera for the size and portability it has is a game changer. I recommend this camera for a casual photographer that doesn’t want to pay for a DSLR.</P>
          </div>

          <div className="pv3">
            <H size={1}>iPad Pro</H>
            <div className="mt2 f4">
              <L hrefLink="https://medium.com/r/?url=http%3A%2F%2Famzn.to%2F2tfZOEh">Buy Here</L>
            </div>
            <Image imgSrc={ipadPro} imgAlt="" />
            <P>I have never found much use for an iPad until I got this beauty. Paired with an <L hrefLink="http://amzn.to/2tZ2lQw">Apple Pencil</L>, this iPad is a power house and is a great way to work on the go. This iPad has practically replaced my Sketchbook and is a go to for me for writing and wireframing before a new project. Paired with the new iOS 11 software, this iPad has been a great way to both consume and create content.</P>
          </div>

          <LineBreak />

          <P>That wraps up this post on my favorite tech I’ve bought in the past year. Please let me know if you like posts around reviews like this, if you’d like to see more, and what type of stuff would you like to see me review. I hope this post helps you out with your purchases and let me know if you have any questions!</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FourtyFive;
