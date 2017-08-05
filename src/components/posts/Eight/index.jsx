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

class Eight extends Component {
  render() {

    const imgEight = require('../../../img/roc-volume-8-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=How%20to%20Accept%20and%20Use%20Feedback%20by%20%40fromcortes%20http%3A//blog.cortes.us/accept-and-use-feedback"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/how-to-get-better"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/how-to-get-better" />
        <Content id="8" >

          <Image imgSrc={imgEight} imgAlt="How to Get Better" />
           <div className="mb5 tl">
            <H size={1}>How to Get Better</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 8</span>
            <span className="black-50">Published Nov 3 2016</span>
          </div>

          <P>Welcome to Volume 8 of The Rate of Change, hope your having a great week. Today I’m writing to you guys from San Francisco after about 12 hours of travel from Florida. Going to be spending the next couple days here if anyone wants to meet up, feel free to reach out to me if you want to grab coffee or something!</P>
          <P>As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Been working hard on redesigning and refactoring Quarry’s new website over the past week but decided to take a step back. I was going a little too simple and traditional in the style of the site but am going to be working with my partner Drew on something new and more experimental. Hoping it comes out well, we will have to see.</P>
          <P>Two of our projects are in the final touches and we can’t wait to unveil them to you guys. As cliché as it sounds, they are definitely something we haven’t seen anywhere before and think they will be incredibly useful.</P>
          <H size={2}>Personal Life</H>
          <P>I spent the last week and a half with my family and really enjoyed not stressing about having to do any work and taking a retreat from my full-time job. I got to see my family and spend time with old friends I haven’t seen in a while.</P>
          <P>Like I said in the introduction, I’m in SF this week! I’ve never been here since I got into design and development so it’s pretty surreal to experience the city and meet some awesome people while I’m here. I’ll make sure to give you guys an update and show you pictures of my experience here.</P>

          <LineBreak />

          <P><DropCap>T</DropCap>his may seem like one those articles you see similar to this with titles like “How to be More Productive in 5 Steps” or “Be Successful by Doing This”. This isn’t one of those articles. This article is an attempt at the truth behind 95% of the people that are good at what they do.</P>
          <P><strong>The only way to get better is investing time.</strong> Good ol’ hard work, patience, sweat, and tears are the only way to get better. The amount of time you invest into what you want to get better at is directly proportional to how your skills progress. There are no shortcuts to truly improving. That’s what separates the passionate from those with alternate motives. If you aren’t passionate, there is no way you are going to be patient enough to invest the time needed.</P>
          <P>Have you ever heard of the 10,000 hour rule? Well, it’s true. And if you are passionate about what you do, after those first 10,000 hours you still aren’t satisfied and need to put in another 10,000. With those hours comes frustration, self-doubt, long nights, and a lot of crappy work. But, in the end, words cannot explain how much better you become when you look back at the work you used to make, even the person you were back then.</P>
          <H size={2}>My Story</H>
          <P>When I started designing, I was a sophomore in college. I was a music major that dreamed of becoming a hip-hop/rap producer (weird, right?) and spent all my time playing instruments and messing around in Logic.</P>
          <P>Once I switched my major, I remember walking in the first day of class with our first project done and in my hand. We had a class critique and everyone’s work went up on the board for everyone to discuss. My work was absolutely <em>atrocious</em> compared to everyone else’s. I got destroyed during the critique. I left that day wanting to quit and go back to music.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default Eight;
