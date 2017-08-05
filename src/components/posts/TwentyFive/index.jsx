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

class TwentyFive extends Component {
  render() {

    const imgTwentyFive = require('../../../img/roc-volume-25-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=How%20Sacrifices%20Provide%20Productivity%20by%20%40fromcortes%20http%3A//blog.cortes.us/how-sacrifices-provide-productivity"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/how-sacrifices-provide-productivity"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/how-sacrifices-provide-productivity" />
        <Content id="25" >

          <Image imgSrc={imgTwentyFive} imgAlt="Finding Comfort in Identity Crisis" />
           <div className="mb5 tl">
            <H size={1}>Finding Comfort in Identity Crisis</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 25</span>
            <span className="black-50">Published Mar 2 2017</span>
          </div>

          <P>Welcome to Volume 25 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Since I’ve been in Asheville with my team at Satchel focusing on that, I haven’t had a chance to work on Quarry stuff. Going to be updating a few sites over the next week or so though so expect updates soon!</P>
          <H size={2}>Personal Life</H>
          <P>As I mentioned above, I’ve been in Asheville, NC the past week working with my team at Satchel Health. It’s been a pretty intense week, but I’ve learned SO much. It’s a great reminder to always stay open to learn new things each day.</P>
          <P>Unfortunately I don’t get to see my immediate family too often because they live in Florida, but my dad is coming up to visit me for a few days this week! Excited to catch up with him, I really want to make a better effort at seeing my family more often so I’m hoping this will push that further.</P>
          <P>Starting next week, I’ll be setting up a Twitch stream schedule where I will be streaming a lot of my personal work. I streamed a few times before I left to Asheville but I’m planning on setting up a concrete schedule so you’ll always know when you can catch me streaming. Follow along at <L hrefLink="https://twitch.tv/cortesarts">twitch.tv/cortesarts</L> if you’d like to catch my streams!</P>

          <LineBreak />

          <P><DropCap>T</DropCap>hroughout my time in the design industry, I’ve noticed and have been approached with a consistent theme from younger (in industry experience, not age) designers; <strong>Identity Crisis</strong>. This concern seems to a common theme, but most believe this to be an issue with their own career.</P>
          <P>Trust me, <strong>this is completely normal</strong>. Time and time again I find myself questioning what I’m working on. <em>Is this good enough? How is this actually contributing to the world? Should I be spending my time on this? Is this even going to help me progress in my career?</em></P>
          <P>Sometimes I even question the type of work I am doing. If you’re familiar with my work, you know that I like to be a “jack-of-all-trades”, working on Branding, Illustration, UI/UX, and Code. But, sometimes I wonder if I should be focusing on one area of my work. I wonder whether a company will hire someone that doesn’t have just one niche skill set.</P>
          <P>The way that I have learned to cope with this is to keep what I want to do at the forefront of my priorities and let everything else work itself out. For example, when I worry about not having a niche skill set, I think about how many times not having just one skill focus has helped me. I’ve been able to build my own projects from start to finish without needing any help. And, I was able to get the jobs I’ve had because of my diverse skill set (startups really need someone like that). Although I may not be 100% the best candidate for a large Fortune 500 company, I take comfort in thinking I may be better off sticking with helping startups and building my own companies.</P>
          <P>Reassuring myself of the reasons I am who I am and do what I do gets me through thought-heavy times.</P>
          <P>Doing what you love should never make you rethink or question your decisions and who you are. Doing what you love is the healthiest decision mentally, and finding a balance between physical and emotional support for yourself should be the aim of your actions/thoughts.</P>
          <P>Remember, everyone feels this way, not just in the creative industry. In business, retail, construction, etc. It’s human nature to want to be better and second guess if you are where you’re supposed to be in life. The best piece of advice I can give you is to focus on what <em>you</em> are doing and do the best to work towards your goal day-in and day-out. Work hard and stay on the path that you feel most drawn to. Failure and success will come and go, but everything works out for the best in the end.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default TwentyFive;
