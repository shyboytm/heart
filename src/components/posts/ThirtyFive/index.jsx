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

class ThirtyFive extends Component {
  render() {

    const imgThirtyFive = require('../../../img/roc-volume-35-cover.gif');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Stop%20Charging%20by%20the%20Hour%20by%20%40fromcortes%20http%3A//blog.cortes.us/stop-charging-hourly"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/stop-charging-hourly"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/stop-charging-hourly" />
        <Content id="35" >

          <Image imgSrc={imgThirtyFive} imgAlt="Stop Charging by the Hour" />
           <div className="mb5 tl measure">
            <H size={1}>Stop Charging by the Hour</H>
            <span className="blue pr3">Volume 35</span>
            <span className="black-50 pr3">Published May 10 2017</span>
          </div>

          <P>Welcome to Volume 35 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>It’s been a great week of progress for Livtra! I’ve been streaming myself designing and coding the landing page to start to build interest in the product and the work we are doing. Our mailing list is going to open here in the next week or so, I’ll be sure to update you so you can get your spot in for early beta access to the app.</P>
          <H size={2}>Personal Life</H>
          <P>I’ve been taking it easy lately since I got back from my last Nashville trip after traveling so much lately. My girlfriend is going out of town this next week so I’m excited to do a lot of streaming, working, and spending time with some family while she’s away.</P>
          <P>As you may or may not know, I collect Pokémon cards. I’ve never really been into strategy card games but I decided to give Pokémon a try since I’m a huge fan. I’ve been trying to learn how to play the Pokémon Online Card Game and have been pleasantly surprised by how much fun it is. The strategy and thought that goes into all the possibilities is intriguing to me. I recommend trying it out and if you want to see me play sometime, I’ve decided to start streaming it sometimes alongside my design streams some days on <L hrefLink="https://www.twitch.tv/cortesarts">Twitch</L>.</P>

          <LineBreak />

          <P><DropCap>T</DropCap>he way you charge for your work and services has never been easy. Projects have diverse deadline patterns, workloads can be unpredictable at times, unexpected things come up in life. The traditional way that you are aware of is charging hourly for your work. That way, if the work takes longer than you thought, you’re still getting paid for those extra hours. But, what if I told you you were losing money with this method?</P>
          <P>Think about it. The longer you do something and the more times you do it, you improve and become more efficient with that task. So, what usually takes you two hours to do now takes you only one hour to do. If you charge hourly, instead of making money from two hours, you’re making money from one hour even though you’re better and more experienced now. That doesn’t really make sense now does it?</P>
          <P>Instead, try charging by the week or by the month for your services. Or even by the project if that’s better for your workflow. This is something I learned a while back from Dann Petty in <L hrefLink="https://crew.co/blog/dann-petty-interview/">his interview with Crew</L>. Dann also speaks about work outside of sitting at a desk. I’ve never met or heard of someone that charges for this time. When you’ve been designing for quite some time, your sub conscience autonomously thinks about problems you were working on. Breaks from work to clear your mind and get inspiration are part of the process too, but it feels weird to charge a client for the hour that you took a walk outside, right?</P>
          <P>Learn to value yourself and your time outside of what you do sitting at a desk. Find a better pattern for charging for projects (sometimes you may have to rely on hourly) and adjust accordingly to give your client the most value and giving you a more sustainable method of working at your best.</P>
          <P><strong>Note: I also came across a great interview that Dann Petty did with Jared Erondu on Dann’s new project Freelance TV. Jared does a great job going over this topic in a similar fashion. I recommend checking out the <L hrefLink="http://freelance.tv/jarederondu/">video</L>!</strong></P>

          <P><em>Featured image animated by </em><L hrefLink="https://dribbble.com/dlvjose">@dlvjose</L></P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default ThirtyFive;
