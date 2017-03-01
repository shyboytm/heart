import React, { Component } from 'react';

import Header from '../../Header';
import Footer from '../../Footer';

import DropCap from '../../type-elements/DropCap';
import GalleryThree from '../../post-elements/GalleryThree';
import H from '../../type-elements/H';
import Image from '../../type-elements/Image';
import L from '../../type-elements/L';
import LineBreak from '../../type-elements/LineBreak';
import P from '../../type-elements/P';
import PostEnd from '../../post-elements/PostEnd';
import Social from '../../type-elements/Social';

class Five extends Component {
  render() {

    const imgFive                     = require('../../../img/roc-volume-5-cover.png');
    const imgCalligritypeLaunchOne    = require('../../../img/postImgs/calligritype-resources-mobile.png');
    const imgCalligritypeLaunchTwo    = require('../../../img/postImgs/calligritype-resources-page.png');
    const imgCalligritypeLaunchThree  = require('../../../img/postImgs/calligritype-website-3.png');
    const imgLessWork                 = require('../../../img/postImgs/less-work-done.png');
    const imgMoreWork                 = require('../../../img/postImgs/more-work-done.png');
    const imgMiloOne                  = require('../../../img/postImgs/milo-introduction-1.jpeg');
    const imgMiloTwo                  = require('../../../img/postImgs/milo-introduction-2.jpeg');
    const imgMiloThree                = require('../../../img/postImgs/milo-introduction-3.jpeg');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Budgeting%20Your%20Bandwidth%20by%20%40fromcortes%20http%3A//blog.cortes.us/budgeting-your-bandwidth"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/budgeting-your-bandwidth"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/budgeting-your-bandwidth" />
        <div id="5" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgFive} imgAlt="Budgeting Your Bandwidth" />
          <div className="mb5 tc">
            <H size={1}>Budgeting Your Bandwidth</H>
            <span className="blue pr3">Volume 5</span>
            <span className="black-50">Published Oct 13 2016</span>
          </div>

          <P>Hey! Welcome to Volume 5 of The Rate of Change, hope your having a great week! As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>I officially launched Calligritype’s new website this week! Some things got adjusted based on feedback, but you can see the basic layout below. <L hrefLink="http://calligritype.us">Be sure to check out the live version as well here →</L>.</P>
          <GalleryThree
            imgOne={imgCalligritypeLaunchOne}
            imgTwo={imgCalligritypeLaunchTwo}
            imgThree={imgCalligritypeLaunchThree} />
          <P>I’m making a lot of good progress on my newest side project and am doing well pushing outside of my comfort zone in terms of style. I wish I could say more now, but I will definitely keep you guys updated.</P>
          <H size={2}>Personal Life</H>
          <P>As you guys know, I got a puppy last week. He’s super well behaved in comparison to when my other dog was a puppy. He’s such a sweet little guy and I’m excited to see him grow up. Here’s a few pictures:</P>
          <GalleryThree
            imgOne={imgMiloOne}
            imgTwo={imgMiloTwo}
            imgThree={imgMiloThree} />
          <P>I’ve been thinking a lot this week about my website and have been itching to rebuild it. I have a couple great ideas to really personalize it such as adding a portion to track the coffees I’ve been enjoying and the brewing methods I prefer. Presenting those in a blog style visually would be pretty sweet I think. We’ll see!</P>

          <LineBreak />

          <P><DropCap>Y</DropCap>our time and effort is precious. You only have so much of each and like currency, should be spent wisely on what matters to you and what brings the most value to your life.</P>
          <P>I get a lot of questions about how I stay productive. That topic will be held off for another post, but a lot of it comes down to my bandwidth. The way that I spend my time and effort towards work is crucial to work efficiently and still have time to rest and enjoying life outside of work.</P>
          <P>Think about how you spend your time during a work day. Most of the time, it’s filled with meetings, distractions, and other things that take you away from focusing on work. You only have so much bandwidth of decision making and creative juice to use throughout the day, and spending them towards unproductive activities helps no one.</P>
          <P>Now, if you become conscious of budgeting your bandwidth by taking on only crucial meetings and reducing distractions, think about how much more you could get done?</P>
          <P>Likewise, budgeting bandwidth also comes into play during work. Trying to tackle too many tasks or projects at once can put a dent in how productive and confident you feel. Take this chart as a visual demonstration:</P>
          <Image imgSrc={imgLessWork} imgAlt="Less Work Done" />
          <P>Outside of full-time work, let’s say you are working on 5 projects at once. For example 3 freelance projects and 2 side projects. Now, you are getting an okay amount of work done on them each week, but it takes you a lot longer to get them all finished because you are distributing your time and effort evenly between 5 projects. You end up finishing each day feeling like you haven’t accomplished anything large, because you only have enough time and effort to tackle small portions of work for each one.</P>
          <P>Now, let’s look at a better solution that I recommend:</P>
          <Image imgSrc={imgMoreWork} imgAlt="More Work Done" />
          <P>Here on the other hand, let’s say you reduce those 5 projects to 1 freelance project and 1 side project. Now, you have much more time and effort available to be invested into those 2 projects. You are able finish projects quicker, feel more productive, and be more intentional with your work and talent. You are able to focus on a few crucial creative decisions instead of spreading decisions thin across 5 projects.</P>
          <P>I personally am a big fan of this solution and have been using it over the past few months. I am fortunate enough to have a job that supports me and my needs. I haven’t had to take on freelance projects that aren’t of large interest to me to make ends meet and it feels great. Instead, I spend my free time focusing on building things that I am passionate about that help others.</P>
          <P>Focusing on 1–2 of these projects allows me to finish projects and put out work I am proud of at a particularly fast rate. I can do so without making any sacrifices on quality because I am investing all that free time into my own work and my future.</P>
          <P>Does that mean this will work for you? Maybe not. But I’ve recommended this method to a number of friends and have gotten very positive feedback that I agree with. Lower stress, higher quality work, and better productivity just to name a few. I’d love for you to try it if you can though, please let me know if it helps or not!</P>
          <P>Just remember, your time and effort is valuable. Where you invest them is directly proportional to so many things including happiness and stress levels. Budgeting your time and effort for both work and personal affairs is crucial to a well-balanced life.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default Five;
