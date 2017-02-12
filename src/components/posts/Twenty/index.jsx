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

class Twenty extends Component {
  render() {

    const imgTwenty = require('../../../img/roc-volume-20-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2%20via%20%40fromcortes"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2"
          googleLink="https://plus.google.com/share?url=https%3A//www.facebook.com/sharer/sharer.php?u=https%253A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%2523.2iqcydlb2" />
        <div id="20" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgTwenty} imgAlt="The Key to Growing Your Social Media Presence" />
          <div className="mb5 tc">
            <H size={1}>The Key to Growing Your Social Media Presence</H>
            <span className="blue pr3">Volume 20</span>
            <span className="black-50">Published Jan 26 2017</span>
          </div>

          <P>Welcome to Volume 20 of The Rate of Change. Can’t believe it’s been 20 weeks in a row that I’ve written to you! I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>This week has been mainly administrative work at Quarry, but one thing I will say is we are looking to bring someone else on the team soon! I’ll let you know how it pans out over the next few weeks.</P>
          <H size={2}>Personal Life</H>
          <P>In terms of any work, I’m still working on setting up my native blog for my website. I’ve been caught up in finishing the packaging freelance project I’ve mentioned in previous posts, so all my free time goes to that currently unfortunately. Hoping to get that wrapped up in the next month or so!</P>
          <P>If you follow me on <L hrefLink="https://twitter.com/fromcortes">Twitter</L> or <L hrefLink="https://dribbble.com/fromcortes">Dribbble</L>, you know I’ve been working on a couple stickers lately that people have really liked (<L hrefLink="https://twitter.com/fromcortes/status/823662588345151488">See a photo of the stickers here</L>). I’m working on an ecommerce section on my website for you guys to pick a few up for yourself!</P>
          <P>I’m thinking about starting to stream myself when working in code and on design work on my <L hrefLink="https://www.twitch.tv/cortesarts">Twitch</L> account. What do you think?</P>

          <LineBreak />

          <P><DropCap>O</DropCap>ver the years I’ve been working on growing my social media outlets on my own. I’ve never paid for advertisements on the most recognizable brands I have and have amounted ~700k followers in total across social media networks. A few you may or may not recognize are <L hrefLink="https://www.instagram.com/calligritype/">Calligritype</L>, <L hrefLink="https://www.instagram.com/illustree/">Illustree</L>, <L hrefLink="https://www.instagram.com/muchclean/">Much Clean</L>, and my <L hrefLink="https://www.instagram.com/fromcortes/">personal account</L>. Now, I don’t state or show this to brag, more to show you I have experience in this realm.</P>
          <P>One thing I always get asked for is tips on growing your social media presence. Although this can vary widely depending on the platform, there is one thing that I always find holds true: creating a network of touch points across different social media and content outlets.</P>
          <P>What I mean by that is use and maintain accounts for different types of social media. Facebook, Twitter, Snapchat, Instagram, Medium, Pinterest, YouTube, Tumblr, etc. depending on what you are comfortable putting on you or your team’s plate. Make sure you keep them active and entertaining for your target audience. By having multiple, spread out touch points, you have more possible places to be found. And if you’ve done this well, the content you posted will be interacted with, you’ll get followers, your website will get more visits, etc.</P>
          <P><em>To help you better visualize, I will give a short overview of touch points I have created and maintain for personal and business entities:</em></P>

          <H size={2}>Personal Brand</H>
          <P>
            <span><b>Social </b>- Twitter, Instagram, Dribbble, Pinterest, Github, Medium</span><br />
            <span><b>Blog Content </b>- Medium, Native Blog, Newsletter</span><br />
            <span><b>Fun Side Projects </b>- Pokém, Taste Notes, Cordio</span><br />
            <span><b>Miscellaneous </b>- Multiple Slack channels for discussion and sharing work/blog posts, Connections w/ my jobs (Satchel Health, Design Inc, freelance clients)</span><br />
          </P>
          <H size={2}>Businesses</H>
          <P>
            <span><b>Quarry </b>- Website, Facebook, Twitter, Newsletter</span><br />
            <span><b>Calligritype </b>- Website, Facebook, Twitter, Instagram</span><br />
            <span><b>Illustree </b>- Instagram</span><br />
            <span><b>Sogol </b>- Website, Facebook, Twitter</span><br />
            <span><b>Fieldy </b>- Website, Facebook Group with Field Notes fans</span><br />
          </P>

          <P>As you can see, I’ve created a plethora of touch points over the years, with more in the works. Of course on top of that SEO, content, interaction, research, etc. is just as (or more) important as creating the outlets. But, a combination of all these is an incredible formula to setting yourself up for success on social media.</P>
          <P>Hope this helps provide a foundation for you, more tips in the future. And between you and me, I’m working on a book focused on creatives building their presence on Instagram. Be on the lookout 👀</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default Twenty;
