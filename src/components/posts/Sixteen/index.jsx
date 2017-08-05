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

class Sixteen extends Component {
  render() {

    const imgSixteen    = require('../../../img/roc-volume-16-cover.png');
    const imgMiloOne    = require('../../../img/postImgs/dog-milo-one.jpeg');
    const imgMiloTwo    = require('../../../img/postImgs/dog-milo-two.jpeg');
    const imgMiloThree  = require('../../../img/postImgs/dog-milo-three.jpeg');
    const imgSFOne      = require('../../../img/postImgs/san-fran-2016-one.jpeg');
    const imgSFTwo      = require('../../../img/postImgs/san-fran-2016-two.jpeg');
    const imgSFThree    = require('../../../img/postImgs/san-fran-2016-three.jpeg');
    const imgSFFour     = require('../../../img/postImgs/san-fran-2016-four.jpeg');
    const imgSFFive     = require('../../../img/postImgs/san-fran-2016-five.jpeg');
    const imgSFSix      = require('../../../img/postImgs/san-fran-2016-six.jpeg');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=My%202016%20by%20%40fromcortes%20http%3A//blog.cortes.us/2016"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/2016"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/2016" />
        <Content id="16" >

          <Image imgSrc={imgSixteen} imgAlt="My 2016" />
           <div className="mb5 tl">
            <H size={1}>My 2016</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 16</span>
            <span className="black-50">Published Dec 29 2016</span>
          </div>

          <P>Hey there! Welcome to Volume 16 of The Rate of Change, hope you’re having a great week and an awesome holiday season. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>I started building that new project I mentioned to you last week. Although I can’t go into extreme details, here’s an obvious tip that I can provide.</P>
          <H size={2}>Personal Life</H>
          <P>I didn’t do too much for Christmas this year which was a little weird, but since I’m away from my family it makes sense. Luckily, some of my non-immediate family members live here in Saint Louis so I had dinner with them and got to hang out for a bit. Besides that I’ve been hard at work at home, trucking away at some new work.</P>
          <P>Besides starting a new side project, I took on a new freelance project to create branding and packaging for a new water company which I am super excited about. You may be seeing my work in grocery stores sometime next year!</P>
          <P>I wrapped up another song this week I’d love for you to listen to. Listen to it and download it here on Soundcloud:</P>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/299298322&amp;color=ff5500"></iframe>

          <LineBreak />

          <P><DropCap>S</DropCap>tarting last year, I write a post each year reflecting back on my major accomplishments of the year and this week I wanted to share my 2016 with you at 22 years old. I’d recommend doing the same if you have time, it’s a great way to reflect and keep record of major accomplishments in your life and a record of them.</P>

          <H size={2}>🎓 Graduated College</H>
          <P>Probably one of my biggest accomplishments this year. I spent 17 years in school and finally finished with a BFA in Design Communications and a minor in Design Administration from Belmont University. College was touch the last 2 years since I was already working a professional design job and doing freelance while being a full-time student. It was a great experience, but I’m glad to have a much less stressful life now that I’m done. I may get a Masters and maybe a PhD at some point, but who knows.</P>

          <H size={2}>💼 Started My First Full Time Job</H>
          <P>Along with graduating college, I took a full-time job offer to be a designer and developer at Satchel Health. I’ve been working there full-time since May and have been able to work hard with my team to grow and develop the company, doubling our size in just a few months. Excited for what’s to come for us!</P>

          <H size={2}>🏠 Moved to Saint Louis</H>
          <P>My girlfriend wants to be a doctor for a living so she decided to do a Masters program in Saint Louis, MO. We’ve been dating for almost 4.5 years now so naturally I came with her. We moved here in August and have been living a mellow lifestyle here. I definitely miss Nashville from time-to-time but I enjoy the laid back lifestyle that I have and have some family here that I have a lot of good times with. Not sure where we will move once my girlfriend is done with this program, but we’ll see!</P>

          <H size={2}>🐶 Got Another Dog, Milo</H>
          <P>One of my favorite things about this year was getting another dog, my 5-month old Whippet puppy, Milo. I almost got a greyhound, but I thought a Whippet would be the better option because I live in an apartment and the size difference wouldn’t be as much compared to my Italian Greyhound, Olive. Here’s a picture of them, they each have such contrasting personalities which balances them out pretty well.</P>
          <GalleryThree
            imgOne={imgMiloOne}
            imgTwo={imgMiloTwo}
            imgThree={imgMiloThree} />

          <H size={2}>✏️ Started This Blog</H>
          <P>Exactly 16 weeks ago I set out to release an article of mine providing personal thoughts and memories every week. Hence, The Rate of Change blog was born and I’ve kept my promise each week. I can’t imagine myself ever stopping, I have such an amazing time writing these and reflecting each week on what I worked on and what happened in my life. I’ve been able to help out quite a few of you and have finally had a place to share my thoughts and work in something other than visuals. I appreciate all your support and am excited to keep writing every week for as long as I can. I hope they have been helpful for you and you have enjoyed them so far. They’re only going to get better, I promise.</P>

          <H size={2}>⌨️ Started Learning Code</H>
          <P>One of the agreements I had with Satchel Health was that I would learn to be a developer. I was never opposed to the idea, I just never put in the required effort up until now. This has been one of the best things I’ve done to benefit both my personal and professional career and I’m extremely excited to see how much I will know by this time next year. Also, I’ve made 1,010 commits this year!</P>

          <H size={2}>🚀 Started Quarry</H>
          <P>What started out as something completely different, my friend Drew and I took our original idea and made Quarry into a home for our side projects. We have some we’ve made together and some we’ve made separately, all housed under one awesome umbrella. We have 8 so far, but there are a couple coming down the pipeline for next year, stay tuned!</P>

          <H size={2}>☕️ Made 6 New Side Projects</H>
          <P>Although Quarry is something Drew and I collaborate on, I personally have built 8 different side projects this year. These have all been made in the last 6 months of the year so not too bad I’d say. Got a couple more coming in 2017, be on the lookout!</P>
          <ul className="list lh-copy black-60 f4">
            <li className="black i mb4"><L hrefLink="http://sogol.co">Sogol</L> - Hand crafted and on-demand logos for your ideas</li>
            <li className="black i mb4"><L hrefLink="http://calligritype.us">Calligritype 3.0</L> - A place for artists & designers</li>
            <li className="black i mb4"><L hrefLink="http://fieldy.co">Fieldy</L> - Unofficial resources for lovers of Field Notes</li>
            <li className="black i mb4"><L hrefLink="https://atom.io/users/fromcortes">Prisma</L> - A minimal and dark UI theme for Atom</li>
            <li className="black i mb4"><L hrefLink="http://coffee.cortes.us">Taste Notes</L> - Coffee thoughts and reference</li>
            <li className="black i mb4"><L hrefLink="http://blog.cortes.us">The Rate of Change</L> - A blog about Design, Development, Business, and Life</li>
          </ul>

          <H size={2}>✈️ Traveled to San Francisco</H>
          <P>This year was the first year I went to San Francisco for no specific purpose and just to enjoy what the city has to offer. I went for a work vacation with one of my best friends that happens to be my boss and had a great time. We had a TON of amazing food and got to visit a few awesome places. You can see a couple of my photos on my Instagram and a few below.</P>
          <GalleryThree
            imgOne={imgSFOne}
            imgTwo={imgSFTwo}
            imgThree={imgSFThree} />
          <GalleryThree
            imgOne={imgSFFour}
            imgTwo={imgSFFive}
            imgThree={imgSFSix} />

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default Sixteen;
