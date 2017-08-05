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

class ThirtyThree extends Component {
  render() {

    const imgThirtyThree = require('../../../img/roc-volume-33-cover.gif');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Do%20You%20Need%20a%20Degree%20in%20Design?%20by%20%40fromcortes%20http%3A//blog.cortes.us/do-you-need-degree-design"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/do-you-need-degree-design"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/do-you-need-degree-design" />
        <Content id="33" >

          <Image imgSrc={imgThirtyThree} imgAlt="Do You Need a Degree in Design?" />
           <div className="mb5 tl">
            <H size={1}>Do You Need a Degree in Design?</H>
            <span className="blue pr3">Volume 33</span>
            <span className="black-50 pr3">Published Apr 27 2017</span>
          </div>

          <P>Welcome to Volume 33 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>I didn’t have the chance to stream too much this week since I was out of town in Nashville again, but I won’t be traveling at all the next few weeks so I’ll be back to my usual stream schedule!</P>
          <P>I’ve also done a bit of work on my new product’s branding on my own time to get ahead while I wasn’t able to stream. The brand is pretty much done, I’m just now working on wrapping up color palette for the brand and UI. If you missed it on my Twitter, here is a peek at what the brand is looking like!</P>
          <H size={2}>Personal Life</H>
          <P>I know I usually share personal topics in my life here, but lately I’ve been feeling a bit self conscious about my hobbies around super nerdy topics. Debating on how I should share these here or if I should just go full nerd mode anyways. Thoughts?</P>

          <LineBreak />

          <Blockquote>Do I need to go to college to get into the design and development world?</Blockquote>
          <P>This is a question I get surprisingly often. While you don’t <em>need</em> to have a degree, I definitely think they are situations and cases for both going and not going. As someone who considers themselves self-taught but still has a degree in design, I definitely think I have a unique perspective on the topic.</P>

          <H size={2}>My Degree in Design</H>
          <P>I graduated from college last year with a major in Design Communications and a minor in Design Administration (just a fancy name for a graphic design degree). I started designing my sophomore year of college and was way behind my peers when I first started. By the end of my college career, I had set a record for the highest score on a portfolio in my school, and was the best in show for my year.</P>
          <P>Unfortunately, I don’t think it was my school that helped me get to that level. The program at the school I attended was geared much more to traditional graphic design while I wanted to focus on the digital realm mainly (branding and illustration could be exceptions). Most of my learning and growth came from my own hard work and seeking out my own mentors for questions and guidance. I spent countless days and nights learning about the industry, programs I used, and methods of design.</P>
          <P>But, I will say that college did provide me with something I really needed: <strong>time</strong>. I needed time to mature as a person, time to figure out what I wanted to do in life, time to meet new friends, and time to learn all the things that come with being an adult. I was an entirely different person from the time I entered college to the time I graduated. And although it was a difficult and time consuming path, I don’t regret doing it one bit.</P>

          <H size={2}>Should You Go to College?</H>
          <P>There are a few determining factors here worth considering, here are some questions worth asking yourself:</P>
          <ul className="list lh-copy black-60 f4 mv5">
            <li className="black i mb4">Do you know generally what you want to do in life? Or at least the next 5 years?</li>
            <li className="black i mb4">Do you have a job (or at least internship) opportunity lined up for you that you’ll enjoy and will help your career?</li>
            <li className="black i mb4">Do you feel confident with your skills working in the real world?</li>
            <li className="black i mb4">Are you mature enough (be honest) to work with teams, people, and clients on a regular basis?</li>
            <li className="black i mb4">Can you support yourself comfortably financially?</li>
          </ul>
          <P>If you answered no to most of these, it may be worth considering going to college to give yourself time and experience to be more successful in your work and finding a job you’ll enjoy.</P>
          <P>There are definitely other options though. A great design program or internship can be a good way to jumpstart your career without the time and financial burden of college. But, it’s very difficult to find an internship without experience or workshops worth your time and money. You can also just spend a lot of time learning on your own like I did in college, the problem is finding the time and keeping yourself accountable (which is where internships, programs, and college can help).</P>
          <P>The main takeaway should be to self analyze where you are in life, and be honest with what you think will help you the most. Consider your situation, the amount of time you have available, where you are financially, connections you have, and your skill level. Depending on the college you attend, they can really help you get ahead in most of these areas. Choosing a college that is right for you that will <em>actually</em> help your situation is a good chunk of the battle, so be careful. Talk to a couple people about your situation if needed, find some different perspectives on your situation to help weigh in to your decision.</P>
          <P>If you need some advice, I’m always happy to help! Feel free to drop by my <L hrefLink="https://www.twitch.tv/cortesarts">streams</L> and ask or reach out to me through <L hrefLink="https://www.twitter.com/fromcortes">Twitter</L> or <L hrefLink="mailto:hi@cortes.us">email</L> and I’ll do my best to provide some advice.</P>

          <P><em>Featured image animated by </em><L hrefLink="https://dribbble.com/dlvjose">@dlvjose</L></P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default ThirtyThree;
