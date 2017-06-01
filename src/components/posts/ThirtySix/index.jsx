import React, { Component } from 'react';

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

class ThirtySix extends Component {
  render() {

    const imgThirtySix = require('../../../img/roc-volume-36-cover.gif');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=The%20Best%20Thing%20I%20Learned%20as%20an%20Adult%20by%20%40fromcortes%20http%3A//blog.cortes.us/best-thing-learned-as-adult"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/best-thing-learned-as-adult"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/best-thing-learned-as-adult" />
        <div id="36" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgThirtySix} imgAlt="The Best Thing I Learned as an Adult" />
          <div className="mb5 tc">
            <H size={1}>The Best Thing I Learned as an Adult</H>
            <span className="blue pr3">Volume 36</span>
            <span className="black-50 pr3">Published May 18 2017</span>
          </div>

          <P>Welcome to Volume 36 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>This week I’ve been working on wrapping up Livtra’s landing page to start building interest and a mailing list for beta users. I’ll be wrapping it up this week and should be launching it early next week! Be on the lookout 👀.</P>
          <H size={2}>Personal Life</H>
          <P>This week I have been taking a lot of time for myself and seeing my family while taking a few days off of work. I’ve also made a few great additions to my Pokémon card collection and have decided I’m going to start sending cards in to get graded next week. It’ll be a really awesome way to boost the value of my cards and also have a great way to display my main collection on my new place when I move in a few months.</P>
          <P>Speaking of moving, I started looking at new places to live this week. I’m officially moving to Memphis, TN in a few months and am starting to get things in order for me to move. Moving is definitely never fun and movers are crazy expensive but hey, it’ll be worth it!</P>

          <LineBreak />

          <P><DropCap>Of</DropCap>the countless lessons I’ve learned from advice and mistakes I’ve come across in my life, there is one that never clicked with me until I got a bit older: <strong>be yourself</strong>. Don’t get me wrong, I know I still have some time to go and a lot to learn and I’m sure the best advice for myself will fluctuate with time. But, being myself has made a huge impact on my life.</P>
          <P>In grade school up until I graduated high school, I was always trying to hide things that I really enjoyed to try my best to fit in and not be made fun of. I was already in the school band <em>and</em> orchestra and felt the need to hide anything else that I could be made fun of for. I hid my love for video games and anime outside of close friend groups, I even felt embarrassed to carry around my viola.</P>
          <P>When I went off to college it didn’t get much better. My first year roommate used to tease me for playing video games instead of going out and partying like most people our age. Anything that wasn’t in line with what he or his friends did was met with teasing and really left me thinking about what I was doing with my life at times. I understand this was just bad luck with my roommate assignment but man was it tough for me. I never experienced bullying to this degree and was away from my family who was my support system.</P>
          <P>Luckily, I met my (still current) girlfriend in college and had her to help me stay sane. I also met one of my best friends my second year of college. He was one of 4 roommates I had in a larger dorm and he introduced me to a lot of subjects and cultures I’m still a fan of today. Not only that, he was part of the reason I was able to learn to accept and be proud of my interests the way he was. Along with new friends and my new found love for design, I slowly but surely became more proud and open with who I was and what I enjoyed.</P>
          <P>A few years later, this has contributed to my overall happiness in life, feeling more comfortable with sharing openly. My taste in music, my love for video games, my obsession with Pokémon, all things I used to be embarrassed to say to anyone. Now I feel completely comfortable being open with my interests and have even found others who have similar interests that I never thought would.</P>
          <P>I think this applies to people on a large scale too. Being open with what you enjoy and care about and accepting others for the same is needed more and more these days. Give it a try and spread the same ideas to others, you owe it to yourself!</P>

          <P><em>Featured image animated by </em><L hrefLink="https://dribbble.com/dlvjose">@dlvjose</L></P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default ThirtySix;
