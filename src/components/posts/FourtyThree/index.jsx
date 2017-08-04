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

class FourtyThree extends Component {
  render() {

    const imgFourtyThree = require('../../../img/roc-volume-43-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Why%20You%20Should%20Start%20Writing%20by%20%40fromcortes%20http%3A//blog.cortes.us/why-you-should-start-writing"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/why-you-should-start-writing"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/why-you-should-start-writing" />
        <Content id="43" >

          <Image imgSrc={imgFourtyThree} imgAlt="Why You Should Start Writing" />
          <div className="mb5 tc">
            <H size={1}>Why You Should Start Writing</H>
            <span className="blue pr3">Volume 43</span>
            <span className="black-50 pr3">Published July 6 2017</span>
          </div>

          <P>Welcome to Volume 43 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Over the weekend I worked on and wrapped up a landing page for Games and Grids, my new blog about the design decisions in the gaming world. Now you can get a sneak peek of what to expect and sign up for the newsletter for updates! It was a lot of fun to make something a little bit different. <L hrefLink="https://gamesandgrids.com">Check it out live here →</L></P>
          <H size={2}>Personal Life</H>
          <P>In preparation for writing reviews for my new blog, I went ahead and got some new games to add to my review list. Currently, I am playing <L hrefLink="http://www.heart-machine.com/">Hyper Light Drifter</L>, an arcade type game about a character fighting a disease. Although it is incredibly difficult, the beautiful art style, music, sounds, and design work make it a wonderfully addicting game to play through. Of course you’ll have to wait to hear me go into detail about the game for when my blog launches, but if you haven’t played it yet you should definitely look into it.</P>
          <P>Since I’ve been playing through Hyper Light Drifter, I’m absolutely in love with the soundtrack made for the game. Check out the ambient electronic style album by Disasterpeace <L hrefLink="https://medium.com/r/?url=https%3A%2F%2Fitun.es%2Fus%2Fv5W3bb">here →</L></P>
          <P>I’ve also been playing a bit of the new DLCs that came out this week for Zelda BoTW and Rocket League. I’m still amazed at how I never get tired of either of these games after so many hours put into each. The DLCs are definitely both very much welcome and I’ve already gotten through most of the Zelda DLC 😅</P>

          <LineBreak />

          <P><DropCap>I</DropCap>do not write for others, I write for myself. I want to express myself, share what I think is helpful, reflect on my life, share my knowledge, and maybe help someone in the process. I’m not the best writer out there, and I do not have all the answers to everyone’s questions. But that’s why I write, to learn more about others and to learn more about myself. I accept that I can’t possibly know every little detail about topics I write about and that articles help different people in different ways.</P>
          <P>And yet, with having these doubts and uncertainties every time I sit down to write, I still show up every week. I will admit, there are some weeks where I don’t feel like writing. I would rather be working on my other projects, playing video games, or spending time with my girlfriend and our dogs. It is not easy by any means, but it is 100% worth it. The amount of people I have been able to impact and how much I’ve learned about myself with writing has exceeded my expectations when I started this blog almost a year ago.</P>
          <P>The reason I am writing this article today is to tell <em>you</em> to write. No matter who you are or the situation you are in, writing will impact you in a positive way. It may seem intimidating at first, but you are a unique human being with your own experiences. And just how you are your own person, so are your perspectives. That’s what others want. A unique, honest perspective with experiences that can help them learn and grow. It does not have to be a lot either, smaller articles are actually better sometimes. Just quick thoughts to get your idea or advice out there for someone else.</P>
          <P>Even if you do not want to share what you write, that’s okay too! Like I mentioned, outside of helping others there are plenty of ways writing has helped me personally. Expression, interest, passion, learning, and growth are some of the ways that writing has become an outlet for me. Writing has even become part of my creative process when I need to step back, get thoughts from my head onto paper, and come back ready to tackle what I was working on.</P>
          <P>I can not recommend writing enough, and I hope you will try it out. If you need some help getting started, feel free to reach out!</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FourtyThree;
