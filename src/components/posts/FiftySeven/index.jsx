import React, { Component } from 'react';

import Content from '../../Content';
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

class FiftySeven extends Component {
  render() {

    const imgFiftySeven = require('../../../img/roc-volume-57-cover.png');

    const hldOne   = require('../../../img/postImgs/hyper-light-drifter-controls.jpg');
    const hldTwo   = require('../../../img/postImgs/hyper-light-drifter-controls-labelled.jpg');
    const hldThree = require('../../../img/postImgs/hyper-light-drifter-guide-one.jpg');
    const hldFour  = require('../../../img/postImgs/hyper-light-drifter-guide-two.jpg');
    const hldFive  = require('../../../img/postImgs/hyper-light-drifter-guide-three.jpg');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=The%20Ebb%20and%20Flow%20of%20the%20Design%20Process?%20by%20%40fromcortes%20http%3A//blog.cortes.us/ebb-and-flow-of-design-process"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/ebb-and-flow-of-design-process"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/ebb-and-flow-of-design-process" />
        <Content id="57">

          <Image imgSrc={imgFiftySeven} imgAlt="Hyper Light Drifter Guidance Design Review and Analysis" />
          <div className="mb5">
            <H size={1}>Hyper Light Drifter Guidance Design Review and Analysis</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 57</span>
            <span className="black-50 pr3">Published Oct 13 2017</span>
          </div>

          <H size={2}>Overview</H>
          <P>These articles do not usually focus on the story of games, but I think it is worth mentioning how incredibly layered the story line and interpretations of this game are. Not to mention the beautiful sound and music design that is in Hyper Light Drifter. I can’t recommend trying out this game enough. At only $20, this game is a steal for what it provides. I can also guarantee you will not fully grasp most of the story (there is no speech or much guidance in this game). I recommend playing through the game with no knowledge and then reading an in-depth story review after beating it once. Then, play through it a few more times. As much as I’d love to give an overall story review to this game, let’s get on to the design choices involved in this game.</P>

          <H size={2}>Design Choices</H>
          <P>One of my favorite things about this game is the unique approach to the game’s interface. While the game uses common patterns players are used to (maps, shops, confirmation, menus, etc), the stylistic and organizational approach that Hyper Light Drifter uses is rare to find in a video game.</P>
          <P>You are never told how to play this game. There are no in-game tutorials or labels for icons or objects you see in the interface of your screen. Only a control guide to see what actions are tied to buttons on your controller/keyboard.</P>
          <Image imgSrc={hldOne} imgAlt="Hyper Light Drifter Controls" />
          <P>Below, you’ll see I have labeled the interface that you start with at the beginning of the game. While the meaning of these are learned quickly as you are attacked, use dashes, or need healing, it’s important to note the standard approach of bars (familiar to players) while still keeping a unique look and feel that is cohesive with the rest of the game.</P>
          <Image imgSrc={hldTwo} imgAlt="Hyper Light Drifter Controls Labeled" />
          <P>Help within the game is almost non-existent in the game (for better or worse) as I mentioned before. Although, I think the creators of Hyper Light Drifter took a great alternative approach to this. Instead of dialogue or written help, Hyper Light Drifter provides actionable visual queues throughout the game. Most notably, the help of your small, floating partner. This partner of yours floats around you and helps you throughout your journey as you slash and dash through different areas and enemies.</P>

          <Image imgSrc={hldThree} imgAlt="Hyper Light Drifter Guide One" />
          <Image imgSrc={hldFour} imgAlt="Hyper Light Drifter Guide Two" />
          <Image imgSrc={hldFive} imgAlt="Hyper Light Drifter Guide Three" />
          <P>From top to bottom, you can see that your partner is calling you over to an actionable item in the world (1). When you are close enough, an action confirmation box is shown, calling your attention that this should be acted upon (2). Then as you hold your action button to confirm, a bar fills from left to right, representing a “positive” action (3), therefore teaching you to watch for similar action calls throughout the game.</P>
          <P>This seems like a simple, maybe even obvious interface right? Well, that is the beauty of it. Without having to tell you what something does explicitly like most games do with an in-game tutorial, Hyper Light Drifter provides small, positive micro interactions that teach you basics through earlier parts of the game. Nintendo was an early proponent of this style of gaming with their creation of Super Mario Bros, and it’s always great to see this approach in a new, unique way like Hyper Light Drifter does.</P>
          <L hrefLink="http://www.heart-machine.com">Buy Hyper Light Drifter →</L>


          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FiftySeven;
