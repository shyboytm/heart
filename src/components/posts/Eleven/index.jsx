import React, { Component } from 'react';

import Content from '../../Content';
import Header from '../../Header';
import Footer from '../../Footer';

import DropCap from '../../type-elements/DropCap';
import H from '../../type-elements/H';
import Image from '../../type-elements/Image';
import L from '../../type-elements/L';
import LineBreak from '../../type-elements/LineBreak';
import P from '../../type-elements/P';
import PostEnd from '../../post-elements/PostEnd';
import Social from '../../type-elements/Social';

class Eleven extends Component {
  render() {

    const imgEleven = require('../../../img/roc-volume-11-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Advantages%20of%20Side%20Projects%20by%20%40fromcortes%20http%3A//blog.cortes.us/advantages-of-side-projects"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/advantages-of-side-projects"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/advantages-of-side-projects" />
        <Content id="11" >

          <Image imgSrc={imgEleven} imgAlt="Advantages of Side Projects" />
           <div className="mb5 tl">
            <H size={1}>Advantages of Side Projects</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 11</span>
            <span className="black-50">Published Nov 24 2016</span>
          </div>

          <P>Welcome to Volume 11 of The Rate of Change, hope your having a great week. We surpassed 10 weeks on this blog! Hard to believe, but so dang exciting. Can’t wait for what is to come, thanks for all the support!</P>
          <P>As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>The project I’ve been working on for the past 3 months is complete! Currently working on a launch plan and some marketing materials but I am so pumped to have finished this project.</P>
          <P>Once this project is finally wrapped up, I am going to really sit down and focus on planning the future of Quarry and the projects we have created. I really want to focus on creating more useful and unique resources out of what we currently have. For example, I am planning to bring back Designer Spotlight to Calligritype which is a monthly feature of a designer with an interview asking them a couple questions about them and their work.</P>
          <P>There are countless other ideas coming that I have for improvements and focusing on creating a concrete roadmap is my next main focus.</P>
          <H size={2}>Personal Life</H>
          <P>Got a 3-day vacation this week for Thanksgiving and really excited to chow down on some food and spend time with family this week. As cheesy as it sounds, the mixture of being thankful for what you have, seeing friends and family, and eating lots of good food is a seriously awesome holiday. Make sure to enjoy your break and let me know what you are thankful for!</P>
          <P>I’m wrapping up the freelance branding project I mentioned I worked on over the past 2 weeks. I’m excited to show my results on <L hrefLink="https://dribbble.com/fromcortes">Dribbble</L>, and you can expect a case study soon!</P>
          <P>I made a little face lift to my personal site this week. Nothing too drastic, but made some improvements in navigation, legibility, and clear call-to-actions throughout the site. Check it out: <L hrefLink="www.cortes.us">www.cortes.us</L> 🎉</P>

          <LineBreak />

          <P><DropCap>If</DropCap> you are familiar with me and my work at <L hrefLink="http://usequarry.com">Quarry</L>, you know I’m passionate about creating and developing side projects. Some of them I would consider companies, others I would consider fun personal projects. I like making things that help others. I find it interesting and beneficial to my skills in all areas of my expertise. Sharing my findings and work I am passionate about makes it more than worth it in the end for me.</P>
          <P><strong>Side projects can help you too, and I’d like to lay out the reasons for you now.</strong></P>
          <H size={2}>1. Skill Builders</H>
          <P>Marketing, business strategies, pricing, UI, UX, development. In practice these subjects are great, but learning them can be a pain. Side projects usually require a base knowledge of all of the listed above. You are (usually) involved in every aspect of the company from beginning to end. To be successful, having this knowledge goes a long way.</P>
          <P>Personally, listening to lectures or watching videos is not the best way that I learn, I learn best by doing and practicing. Side projects have been this for me over the past few years. I can’t begin to explain how many things I’ve learned about a vast amount of subjects from side projects. I love researching subjects that apply to what I am working on, this makes studying and exploration exciting and not feel like what I normally think of as learning.</P>
          <P>While I enjoy being a jack of all trades, that may not be for you, and that’s okay! The wonderful thing about the technology world is the amount of services that can assist with places of weakness or disinterest. For example, if you can’t code and don’t want to learn or don’t have the time to, services like <L hrefLink="http://squarespace.com/">Squarespace</L> and <L hrefLink="http://shopify.com">Shopify</L> can take over that responsibility. Or, if you can’t create branding for your company, you can hire someone if you can afford it. If not, find something temporary!</P>
          <P>Point being, you should try to learn all you can to be well-rounded, but there are endless hacks to certain problems you can’t tackle. It’s all about planning and thinking creatively about the obstacles.</P>
          <H size={2}>2. Portfolio Pieces</H>
          <P>Side projects make for incredible portfolio pieces. Having something live and usable that is providing real benefits to people is a great asset to have in your portfolio. Being able to show a project and say you were the sole creator of it is a great feeling. Of course it doesn’t replace case studies, but it is definitely a close contender. Being able to experience a project instead of just seeing a bunch of PNGs goes a long way. Heck even better, you can make case studies for your side projects, killing two birds with one stone.</P>
          <H size={2}>3. Extra Income</H>
          <P>While money should never be the end goal, it is one of the aftermaths of creating a great project. Creating a project that helps solve someone else’s obstacles is something people will pay for. We all have bills, so there is nothing wrong with charging for the product you provide if there is a fair and safe opportunity to do so.</P>
          <P>While it usually won’t be something you can live off of instantly, a little bit to help ease financials in your life is a definite possibility. This goes back to hard work and research on the subject, because it isn’t easy. But if done honestly and intentionally, it can pay off in the long run and help support the work you put into the project.</P>
          <H size={2}>4. Contact Creators</H>
          <P>My side projects have helped me meet and connect with an incredible amount of great people. I’ve made a ton of friends and business opportunities through my projects. People have reached out in admiration and appraisal for the hard work I’ve put into my work. I’ve even had job hiring opportunities come from the work I’ve done at <L hrefLink="http://usequarry.com">Quarry</L>.</P>
          <P>Side projects can lead to connections you would never imagine. People recognize value and hard-work in companies. And if the right person comes across that project, it may lead to a new friend, a new business inquiry, or even a new job.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default Eleven;
