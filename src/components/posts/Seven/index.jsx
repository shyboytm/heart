import React, { Component } from 'react';

import Content from '../../Content';
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

class Seven extends Component {
  render() {

    const imgSeven = require('../../../img/roc-volume-7-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=How%20to%20Accept%20and%20Use%20Feedback%20by%20%40fromcortes%20http%3A//blog.cortes.us/accept-and-use-feedback"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/accept-and-use-feedback"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/accept-and-use-feedback" />
        <Content id="7" >

          <Image imgSrc={imgSeven} imgAlt="How to Accept and Use Feedback" />
          <div className="mb5 tc">
            <H size={1}>How to Accept and Use Feedback</H>
            <span className="blue pr3">Volume 7</span>
            <span className="black-50">Published Oct 27 2016</span>
          </div>

          <P>Hey! Welcome to Volume 7 of The Rate of Change, hope your having a great week! As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>This week I started rebuilding and redesigning Quarry’s site. Quarry’s current site was just an MVP to get something out there for people to be able to visit and contact us. This new site is going to be fully flushed out and will have a couple extras including a monthly newsletter and downloadable wallpapers. I will also in the future be adding a shop with some sweet swag for you to use. This new site is being built in React for a quicker and overall better experience.</P>
          <P>Still ironing out some details on two of our latest projects, one from me and one from my partner Drew. Still looking for some people to help me critique the site next week, reach out if you’re interested!</P>
          <P>Once these are wrapped up, we will be spending our time focusing on improving and adding new features to our current projects, rather than work on more ideas. When another idea we want to pursue comes up I’ll definitely let you know, but for now we want to focus on improving existing projects.</P>
          <H size={2}>Personal Life</H>
          <P>This week I’ve been in South Florida on vacation, visiting my family. I’m really enjoying the change of pace and the break from full-time work while being able to see my family.</P>
          <P>Next week starting Wednesday I’ll be in San Francisco! I’m looking for recommendations on restaurants, coffee shops, and attractions you think are worth visiting. Please let me know! And if you live there and want to meet up, reach out to me and we can set something up!</P>

          <LineBreak />

          <P><DropCap>O</DropCap>ne of the most important skills you will learn as a designer is how and when to accept feedback. Feedback from multiple stakeholders helps you create better, more effective work.</P>
          <P>Admittedly, I prefer working on my own and struggle accepting feedback sometimes with that work. My side projects are near and dear to my heart, and taking negative feedback on them can be difficult. I’m confident in my work and relish in using actual data and proven methods in my work, so how could I be wrong in my decisions?</P>
          <P>The reality is, there is <em>no way</em> I can take every single thing into account with my work. Working on the same project for weeks or months at a time makes it easy to miss mistakes in my design, code, and business models. Input from people outside the small scope of my project can bring that project to the next level.</P>
          <P>Over the years that I’ve been designing, I’ve slowly learned how and when to take feedback. Knowing the levels that feedback is coming from is a crucial first step in this. There are obvious things like a spelling mistake, a wrong color, or inconsistent spacing that are a no-brainer to fix. But when you get into deeper, more meta changes, how do you filter that feedback?</P>
          <P>It may seem obvious, but keeping the end users at the center of your feedback loop let’s you balance this. When you receive feedback, just think, does this benefit the experience of who will be viewing or using this work at the end? Or is this feedback more of a personal preference? Filtering feedback this way with a respectful and open attitude has the potential to improve and even save your project.</P>
          <P>A minor example of this is some feedback I got on the first version of <L hrefLink="http://calligritype.us">Calligritype’s new website</L>. Here is what I was told:</P>
          <Blockquote>Love how clean it is, but it feels like a tech start-up website as opposed to your go-to source for design/lettering inspiration. <br />Feels a little too close to your personal brand. I get that you were possibly going for it, but I think it could be cool for you to continue branching out in your illustrative style for some elements for the site.</Blockquote>
          <P>They were right. I had spent a few weeks designing and building that website and those thoughts hadn’t crossed my mind once. But now that I was hearing it, it clicked instantly. I built something too in line with my personal preferences rather than what is best for the company. Luckily, it was a relatively small change. I revised the colors I was using and the typefaces throughout the site, worked much better and did the job.</P>
          <P>Slowly but surely I’ve been learning to seek and accept feedback in my side projects. I love using side projects as a creative outlet outside of my full-time work, but I need to learn to accept feedback the same way I do at my full-time job. Knowing feedback can benefit your project immensely is crucial to being open with your process and adjusting to what is best for the brand.</P>
          <H size={2}>Your Work is Not You</H>
          <P>One of the most helpful things I’ve learned working in this industry is <em>your work is not you</em>. The issue that a lot of designer have is taking things personally. They take feedback as a shot at their skill level and their ego.</P>
          <P>As a designer in healthcare (I work full-time as the lead designer at <L hrefLink="http://satchelhealth.com">Satchel Health</L>), feedback is incredibly helpful. Healthcare is a complex industry that depends on multiple stakeholders. Creating a product that these stakeholders are accepting of is a necessity to be successful. Being on the Product team, business needs and feedback helps us build a product that customers want, not us.</P>
          <P>At work, I take feedback wholeheartedly and never take it personally. Accepting the fact that I don’t always know what’s best is comforting, that’s what you have your team and users for. To give honest, stakeholder based feedback on what is best for the business, not for you. It may technically be <em>your</em> work, but if it isn’t best for the business financially, morally, or strategically, then who does the work benefit?</P>
          <P>Feedback lets you venture into the unknown confidently, knowing you can improve and adjust to a better solution later on. Feedback lets you experiment early on, make mistakes, and build a better end product. Be open with your process and mistakes and remember to ask questions often.</P>


          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default Seven;
