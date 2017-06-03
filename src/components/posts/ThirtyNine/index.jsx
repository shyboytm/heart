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

class ThirtyNine extends Component {
  render() {

    const imgThirtyNine          = require('../../../img/roc-volume-38-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Your%20Work%20is%20Not%20Hard%20by%20%40fromcortes%20http%3A//blog.cortes.us/your-work-is-not-hard"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/your-work-is-not-hard"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/your-work-is-not-hard" />
        <div id="38" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgThirtyNine} imgAlt="Your Work is Not Hard" />
          <div className="mb5 tc">
            <H size={1}>Your Work is Not Hard</H>
            <span className="blue pr3">Volume 39</span>
            <span className="black-50 pr3">Published June 8 2017</span>
          </div>

          <P>Welcome to Volume 39 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <H size={2}>Personal Life</H>

          <LineBreak />

          <P><DropCap>J</DropCap><L hrefLink="https://medium.com/@jasonfried">ason Fried</L>, CEO of Basecamp, recently released an <L hrefLink="https://m.signalvnoise.com/if-youre-reading-this-you-probably-don-t-do-hard-work-41585c1c16a7">article</L> about hard work. First off, I recommend you go read that post. This post bring up a great point that I think about often, that the work we do is not hard work and most folks take this for granted. We can sit in an air conditioned room with just a laptop and an internet connection, drinking coffee, moving almost nothing but our hands. Jason goes into much more detail about this but what I want to focus on is the being grateful part.</P>
          <P>Up until I was four, I lived with my birth mother who had nothing. Some days I would go without eating and a Lunchable would be the greatest thing in the world for me, I still remember to this day almost 17 years later. Fortunately, I then moved in with my dad who was a doctor. My dad grew up with less than I could ever imagine and worked hard to get to the career he has. My dad always made sure my sister and I had everything we needed.</P>
          <P>All throughout my life though my dad always made it a point to teach me the value of work and money. Even though we lived comfortably, he taught me to never take that for granted, be grateful, and give back to others that needed things more than I did.</P>
          <P>Fast forward to now. I work from home doing web design and development, making great money for my age and have everything I need to live comfortably. I may “work hard” but I can guarantee the work I do isn’t <em>hard</em>. It did take years to learn and countless long nights, but I love doing it. It’s fun and rewarding. Challenging at times, yes, but never <em>hard</em>.</P>
          <P>Comparatively, I have quite the easy life, as do most of us in the tech and/or corporate world. I think it’s important to keep this in perspective and be grateful for the fortunate situation you have. You don’t have to work in fields farming in the hot sun for 8 hours a day. Most of your work can be done with a laptop and an internet connection.</P>
          <P>Be grateful for the situation you have, even if it’s not 100% where you want to be yet.</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default ThirtyNine;
