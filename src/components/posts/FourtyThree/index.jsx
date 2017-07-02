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

class FourtyThree extends Component {
  render() {

    const imgFourtyThree = require('../../../img/roc-volume-42-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Why%20You%20Should%20Start%20Writing%20by%20%40fromcortes%20http%3A//blog.cortes.us/why-you-should-start-writing"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/why-you-should-start-writing"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/why-you-should-start-writing" />
        <div id="43" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgFourtyThree} imgAlt="Why You Should Start Writing" />
          <div className="mb5 tc">
            <H size={1}>Why You Should Start Writing</H>
            <span className="blue pr3">Volume 43</span>
            <span className="black-50 pr3">Published July 6 2017</span>
          </div>

          <P>Welcome to Volume 43 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <H size={2}>Personal Life</H>

          <LineBreak />

          <P><DropCap>I</DropCap>do not write for others, I write for myself. I want to express myself, share what I think is helpful, reflect on my life, share my knowledge, and maybe help someone in the process. I’m not the best writer out there, and I do not have all the answers to everyone’s questions. But that’s why I write, to learn more about others and to learn more about myself. I accept that I can’t possibly know every little detail about topics I write about and that articles help different people in different ways.</P>
          <P>And yet, with having these doubts and uncertainties every time I sit down to write, I still show up every week. I will admit, there are some weeks where I don’t feel like writing. I would rather be working on my other projects, playing video games, or spending time with my girlfriend and our dogs. It is not easy by any means, but it is 100% worth it. The amount of people I have been able to impact and how much I’ve learned about myself with writing has exceeded my expectations when I started this blog almost a year ago.</P>
          <P>The reason I am writing this article today is to tell <em>you</em> to write. No matter who you are or the situation you are in, writing will impact you in a positive way. It may seem intimidating at first, but you are a unique human being with your own experiences. And just how you are your own person, so are your perspectives. That’s what others want. A unique, honest perspective with experiences that can help them learn and grow. It does not have to be a lot either, smaller articles are actually better sometimes. Just quick thoughts to get your idea or advice out there for someone else.</P>
          <P>Even if you do not want to share what you write, that’s okay too! Like I mentioned, outside of helping others there are plenty of ways writing has helped me personally. Expression, interest, passion, learning, and growth are some of the ways that writing has become an outlet for me. Writing has even become part of my creative process when I need to step back, get thoughts from my head onto paper, and come back ready to tackle what I was working on.</P>
          <P>I can not recommend writing enough, and I hope you will try it out. If you need some help getting started, feel free to reach out!</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default FourtyThree;
